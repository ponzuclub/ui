import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Image, Card, InputGroup, FormControl } from 'react-bootstrap';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import { useNyanRewards } from '../hooks';

function EthCard() {
  const { active, account, chainId, library, connector, activate } = useWeb3React();
  const [ethValue, setEthValue] = useState('0');
  const [staked, setStaked] = useState('0');
  const [earned, setEarned] = useState('0');
  const rewards = useNyanRewards("0x245E2775446684F50D22D11A7F4f63502a1B0c8C", library ? true : false);

  useEffect(() => {
    if (library) {
      library.getBalance(account).then(res => {
        setEthValue(ethers.utils.formatEther(res));
      });
      rewards.balanceOf(account).then(res => {
        setStaked(ethers.utils.formatEther(res));
      });
      rewards.earned(account).then(res => {
        setEarned(ethers.utils.formatEther(res));
      });
    }
  }, [library])

  function handleStake() {
    rewards.stake(0, { value: ethers.utils.parseEther(ethValue) })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  function handleGetReward() {
    rewards.getReward()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  function handleExit() {
    rewards.exit()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  if (typeof account !== "string") {
    return (
      <Card>
        <Card>
          <Card.Header as="h5">Farm</Card.Header>
          <Card.Body>
            <Card.Title>ETH Pool</Card.Title>
            <Card.Text>
              APR:
            </Card.Text>
            <Row>
              <Col>
                <InputGroup className="mb-3">
                  <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                  <Button variant="outline-success" id="button-addon2" disabled>
                    Max
                  </Button>
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant="primary" disabled>Connect Wallet</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Card>
    )

  }
  return (
    <Card>
      <Card.Header as="h5">Farm</Card.Header>
      <Card.Body>
        <Card.Title>ETH Pool</Card.Title>
        <Card.Text>
          APR:
        </Card.Text>
        <Card.Text>
          Staked: {staked} ETH
        </Card.Text>
        <Card.Text>
          Earned: {earned} Ponzu
        </Card.Text>

        <Row>
          <Col>
            <InputGroup className="mb-3">
              <FormControl 
                placeholder="ETH Value"
                aria-label="eth-value" 
                value={ethValue}
                onChange={e => setEthValue(e.target.value)}
              />
              <Button 
                variant="outline-success" 
                id="button-addon2"
                onClick={() => {
                  if(library) {
                    library.getBalance(account).then(res => {
                      setEthValue(ethers.utils.formatEther(res));
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
              variant="primary"
              onClick={() => {
                handleStake()
              }}
            >
              Stake
            </Button>
          </Col>
          <Col>
            <Button 
              variant="success"
              onClick={() => {
                handleGetReward()
              }}
            >
              Collect Ponzu
            </Button>
          </Col>
          <Col>
            <Button 
              variant="dark"
              onClick={() => {
                handleExit()
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

export default EthCard;