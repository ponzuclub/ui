import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Image,
  Card,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { useERC20, usePonzu, useNyanRewards } from "../hooks";

function SLPCard(props) {
  const { title, slpTokenAddress, poolAddress } = props;
  const { active, account, chainId, library, connector, activate } =
    useWeb3React();
  const [slpValue, setSlpValue] = useState("0");
  const [staked, setStaked] = useState("0");
  const [earned, setEarned] = useState("0");
  const slp = useERC20(slpTokenAddress, library ? true : false);
  const ponzu = usePonzu(library ? true : false);
  const rewards = useNyanRewards(poolAddress, library ? true : false);

  useEffect(() => {
    if (library) {
      slp.balanceOf(account).then((res) => {
        setSlpValue(ethers.utils.formatEther(res));
      });
      rewards.balanceOf(account).then((res) => {
        setStaked(ethers.utils.formatEther(res));
      });
      rewards.earned(account).then((res) => {
        setEarned(ethers.utils.formatEther(res));
      });
    }
  }, [library]);

  function handleApprove() {
    slp
      .approve(poolAddress, ethers.utils.parseEther("100000000"))
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleStake() {
    rewards
      .stake(ethers.utils.parseEther(slpValue))
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleGetReward() {
    rewards
      .getReward()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleExit() {
    rewards
      .exit()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (typeof account !== "string") {
    return (
      <Card>
        <Card>
          <Card.Header as="h5">Farm</Card.Header>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>APR:</Card.Text>
            <Row>
              <Col>
                <InputGroup className="mb-3">
                  <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                  />
                  <Button variant="outline-success" id="button-addon2" disabled>
                    Max
                  </Button>
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant="primary" disabled>
                  Connect Wallet
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Card>
    );
  }
  return (
    <Card>
      <Card.Header as="h5">Farm</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>APR:</Card.Text>
        <Card.Text>Staked: {staked} SLP</Card.Text>
        <Card.Text>Earned: {earned} Ponzu</Card.Text>

        <Row>
          <Col>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="SLP Value"
                aria-label="slp-value"
                value={slpValue}
                onChange={(e) => setSlpValue(e.target.value)}
              />
              <Button
                variant="outline-success"
                id="button-addon2"
                onClick={() => {
                  if (library) {
                    slp.balanceOf(account).then((res) => {
                      setSlpValue(ethers.utils.formatEther(res));
                    });
                  }
                }}
              >
                Max
              </Button>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              variant="warning"
              onClick={() => {
                handleApprove();
              }}
            >
              Approve
            </Button>
          </Col>
          <Col>
            <Button
              variant="primary"
              onClick={() => {
                handleStake();
              }}
            >
              Stake
            </Button>
          </Col>
          <Col>
            <Button
              variant="success"
              onClick={() => {
                handleGetReward();
              }}
            >
              Collect Ponzu
            </Button>
          </Col>
          <Col>
            <Button
              variant="dark"
              onClick={() => {
                handleExit();
              }}
            >
              Collect Ponzu and GTFO
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default SLPCard;
