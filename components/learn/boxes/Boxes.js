/**
 * Copyright (c) 2022, WSO2 LLC (http://www.wso2.com) All Rights Reserved.
 *
 * WSO2 LLC licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import * as React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styles from './Boxes.module.css';
import { prefix } from '../../../utils/prefix';


export default function Boxes(props) {
  return (
    <>
      <Row className="pageContentRow llanding" >
        <Col xs={12}>
          <Container>
            <Row>
              <Col xs={12} md={4} lg={4} className={styles.boxCol}>
                <div className={styles.cardWrapper}>
                  <div>
                    <h3 id='get-started-with-integration' className='section'>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-link-45deg mdButton pe-2"
                        viewBox="0 0 16 16"
                        onClick={(e) => props.getLink(e.target, 'get-started-with-integration')}
                      >
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                      </svg>
                      Get started with integration

                    </h3>
                    <div className={styles.cardDescription}>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/get-started`} className={styles.titleLink}>
                            Get started
                          </a>
                        </p>
                        <p className={styles.description}>Install Ballerina, set it all up, and take it for a spin.</p>
                      </div>

                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/pre-built-integrations/`} className={styles.titleLink}>
                            Pre-built integrations
                          </a>
                        </p>
                        <p className={styles.description}>Explore and try out a series of guided integration examples.</p>
                      </div>

                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/enterprise-integration-patterns/`} className={styles.titleLink}>
                            Enterprise integration patterns
                          </a>
                        </p>
                        <p className={styles.description}>Usage patterns for implementing robust integrations.</p>
                      </div>

                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/integration-tutorials`} className={styles.titleLink}>
                            Integration tutorials
                          </a>
                        </p>
                        <p className={styles.description}>Explore and try out a series of guided integration tutorials.</p>
                      </div>

                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/supported-data-formats`} className={styles.titleLink}>
                            Supported data formats
                          </a>
                        </p>
                        <p className={styles.description}>List of data formats supported by Ballerina.</p>
                      </div>

                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/supported-network-protocols`} className={styles.titleLink}>
                            Supported network integration protocols
                          </a>
                        </p>
                        <p className={styles.description}>List of network integration protocols supported by Ballerina.</p>
                      </div>

                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4} lg={4} className={styles.boxCol}>
                <div className={styles.cardWrapper}>
                  <div>
                    <h3 id='integration-tools' className='section'>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-link-45deg mdButton pe-2"
                        viewBox="0 0 16 16"
                        onClick={(e) => props.getLink(e.target, 'integration-tools')}
                      >
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                      </svg>
                      Integration tools
                    </h3>
                    <div className={styles.cardDescription}>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/openapi-tool`} className={styles.titleLink}>
                            OpenAPI tool</a>
                        </p>
                        <p className={styles.description}>Generate a Ballerina service and client skeletons for an OpenAPI contract.</p>
                      </div>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/graphql-tool`} className={styles.titleLink}>
                            GraphQL tool
                          </a>
                        </p>
                        <p className={styles.description}>Generate GraphQL service skeleton for a given GraphQL schema and generate schema for a given Ballerina GraphQL service.</p>
                      </div>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/asyncapi-tool`} className={styles.titleLink}>
                            AsyncAPI tool
                          </a>
                        </p>
                        <p className={styles.description}>Generate a Ballerina service and listener skeletons for an AsyncAPI contract.</p>
                      </div>

                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/grpc-tool`} className={styles.titleLink}>
                            gRPC tool
                          </a>
                        </p>
                        <p className={styles.description}>Develop a service documented in a Protocol Buffers by generating Ballerina service/client stub files and skeletons.</p>
                      </div>

                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/health-tool`} className={styles.titleLink}>
                            Health tool (FHIR/HL7)
                          </a>
                        </p>
                        <p className={styles.description}>FHIR/HL7 profile to client and stub generation tool of Ballerina.</p>
                      </div>


                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/edi-tool`} className={styles.titleLink}>
                            EDI tool
                          </a>
                        </p>
                        <p className={styles.description}>The set of command line tools provided to work with EDI files in Ballerina.</p>
                      </div>

                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4} lg={4} className={styles.boxCol}>
                <div className={styles.cardWrapper}>
                  <div>
                    <h3 id='references' className='section'>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-link-45deg mdButton pe-2"
                        viewBox="0 0 16 16"
                        onClick={(e) => props.getLink(e.target, 'references')}
                      >
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                      </svg>
                      References
                    </h3>
                    <div className={styles.cardDescription}>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a target='_blank' rel="noreferrer" href={`${prefix}/learn/by-example`} className={styles.titleLink}>
                            Ballerina by Example
                          </a>
                        </p>
                        <p className={styles.description}>Explore and try out a series of guided Ballerina examples.</p>
                      </div>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a target='_blank' rel="noreferrer" href={`https://lib.ballerina.io/`} className={styles.titleLink}>
                            Ballerina API Docs
                          </a>
                        </p>
                        <p className={styles.description}>Refer to the Ballerina library (API) documentation.</p>
                      </div>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/ballerina-specifications`} className={styles.titleLink}>
                            Ballerina specifications
                          </a>
                        </p>
                        <p className={styles.description}>Refer to the language, library, and platform specifications.</p>
                      </div>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a target='_blank' rel="noreferrer" href={`${prefix}/learn/vs-code-extension/`} className={styles.titleLink}>
                            Visual Studio Code extension</a>
                        </p>
                        <p className={styles.description}>Features of the Ballerina Visual Studio Code extension.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>

      <Row className="pageContentRow llanding" style={{ background: "#eeeeee" }}>
        <Col xs={12}>
          <Container>
            <Row>
              <Col xs={12}>
                <h2 id="development-tutorials" className='section'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-link-45deg mdButton pe-2"
                    viewBox="0 0 16 16"
                    onClick={(e) => props.getLink(e.target, 'development-tutorials')}
                  >
                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                  </svg>
                  Development tutorials
                </h2>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4} lg={4} className={styles.boxCol}>
                <div className={styles.cardWrapper}>
                  <div>
                    <h3 id='build-and-run' className='section'>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-link-45deg mdButton pe-2"
                        viewBox="0 0 16 16"
                        onClick={(e) => props.getLink(e.target, 'build-and-run')}
                      >
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                      </svg>
                      Build and run
                    </h3>
                    <div className={styles.cardDescription}>

                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/cli-commands`} className={styles.titleLink}>
                            CLI commands
                          </a>
                        </p>
                        <p className={styles.description}>CLI commands of the bal tool.</p>
                      </div>

                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/update-tool/`} className={styles.titleLink}>
                            Update tool
                          </a>
                        </p>
                        <p className={styles.description}>Maintain your Ballerina installation up to date with the latest patch and minor releases.</p>
                      </div>

                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/ballerina-shell`} className={styles.titleLink}>
                            Ballerina Shell
                          </a>
                        </p>
                        <p className={styles.description}>Details of the Read-Evaluate-Print Loop (REPL) for Ballerina.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4} lg={4} className={styles.boxCol}>
                <div className={styles.cardWrapper}>
                  <div>
                    <h3 id='organize-source-code-and-dependencies' className='section'>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-link-45deg mdButton pe-2"
                        viewBox="0 0 16 16"
                        onClick={(e) => props.getLink(e.target, 'organize-source-code-and-dependencies')}
                      >
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                      </svg>
                      Organize source code and dependencies
                    </h3>
                    <div className={styles.cardDescription}>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/organize-ballerina-code`} className={styles.titleLink}>
                            Organize Ballerina code
                          </a>
                        </p>
                        <p className={styles.description}>Basics of projects, packages, and modules.</p>
                      </div>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/package-references`} className={styles.titleLink}>
                            Package references
                          </a>
                        </p>
                        <p className={styles.description}>References related to Ballerina packages.</p>
                      </div>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/manage-dependencies`} className={styles.titleLink}>
                            Manage dependencies
                          </a>
                        </p>
                        <p className={styles.description}>Declare and manage dependencies and use the local repository.</p>
                      </div>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/style-guide/coding-conventions`} className={styles.titleLink}>
                            Style guide
                          </a>
                        </p>
                        <p className={styles.description}>Best practices to follow when formatting Ballerina code.</p>
                      </div>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/customize-formatting`} className={styles.titleLink}>
                            Customize formatting
                          </a>
                        </p>
                        <p className={styles.description}>Provide custom formatting options to Ballerina formatter.</p>
                      </div> 
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4} lg={4} className={styles.boxCol}>
                <div className={styles.cardWrapper}>
                  <div>
                    <h3 id='test-debug-and-document-the-code' className='section'>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-link-45deg mdButton pe-2"
                        viewBox="0 0 16 16"
                        onClick={(e) => props.getLink(e.target, 'test-debug-and-document-the-code')}
                      >
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                      </svg>
                      Test, debug, and document the code
                    </h3>
                    <div className={styles.cardDescription}>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/test-ballerina-code/test-a-simple-function`} className={styles.titleLink}>
                            Test Ballerina code
                          </a>
                        </p>
                        <p className={styles.description}>Write automated tests using the built-in test framework.</p>
                      </div>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/debug-ballerina-programs`} className={styles.titleLink}>
                            Debug Ballerina programs
                          </a>
                        </p>
                        <p className={styles.description}>Tooling support for troubleshooting Ballerina applications.</p>
                      </div>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/generate-code-documentation`} className={styles.titleLink}>
                            Document Ballerina code
                          </a>
                        </p>
                        <p className={styles.description}>Generate documentation for the code.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
               <Col xs={12} md={4} lg={4} className={styles.boxCol}>
                <div className={styles.cardWrapper}>
                  <div>
                    <h3 id='configurability' className='section'>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-link-45deg mdButton pe-2"
                        viewBox="0 0 16 16"
                        onClick={(e) => props.getLink(e.target, 'configurability')}
                      >
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                      </svg>
                      Configurability
                    </h3>
                    <div className={styles.cardDescription}>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/configure-a-sample-ballerina-service`} className={styles.titleLink}>
                            Configure a sample Ballerina service
                          </a>
                        </p>
                        <p className={styles.description}>Configure values at runtime through configurable module-level variables.</p>
                      </div>
                    </div>

                    <div className={styles.cardDescription}>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/provide-values-to-configurable-variables`} className={styles.titleLink}>
                            Provide values to configurable variables
                          </a>
                        </p>
                        <p className={styles.description}>Provide configurable values through configuration files, command-line arguments, and environment variables.</p>
                      </div>
                    </div>

                    <div className={styles.cardDescription}>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/configure-values`} className={styles.titleLink}>
                            Configure values
                          </a>
                        </p>
                        <p className={styles.description}>Advanced use cases of configuring values using configurable variables.</p>
                      </div>
                    </div>

                  </div>
                </div>
              </Col>
              <Col xs={12} md={4} lg={4} className={styles.boxCol}>
                <div className={styles.cardWrapper}>
                  <div>
                    <h3 id='deployment-guidelines' className='section'>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-link-45deg mdButton pe-2"
                        viewBox="0 0 16 16"
                        onClick={(e) => props.getLink(e.target, 'deployment-guidelines')}
                      >
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                      </svg>
                      Deployment guidelines
                    </h3>
                    <div className={styles.cardDescription}>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/deployment-guidelines-overview`} className={styles.titleLink}>
                            Deployment guidelines overview
                          </a>
                        </p>
                        <p className={styles.description}>Guidelines for Ballerina deployment in production.</p>
                      </div>

                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/k8s-deployment/`} className={styles.titleLink}>
                            Kubernetes deployment
                          </a>
                        </p>
                        <p className={styles.description}>Guidelines for deployment in Kubernetes.</p>
                      </div>

                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/serverless-deployment/`} className={styles.titleLink}>
                            Serverless deployment
                          </a>
                        </p>
                        <p className={styles.description}>Guidelines for deployment in Serverless.</p>
                      </div>

                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/virtual-machine-deployment`} className={styles.titleLink}>
                            Virtual machine deployment
                          </a>
                        </p>
                        <p className={styles.description}>Guidelines for deployment in VMs.</p>
                      </div>

                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4} lg={4} className={styles.boxCol}>
                <div className={styles.cardWrapper}>
                  <div>
                    <h3 id='persistently-store-data' className='section'>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-link-45deg mdButton pe-2"
                        viewBox="0 0 16 16"
                        onClick={(e) => props.getLink(e.target, 'persistently-store-data')}
                      >
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                      </svg>
                      Persistently store data
                    </h3>
                    <div className={styles.cardDescription}>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/bal-persist-overview`} className={styles.titleLink}>
                            Bal persist overview
                          </a>
                        </p>
                        <p className={styles.description}>How to simplify data persistence with <code>bal persist</code>.</p>
                      </div>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/persist-model`} className={styles.titleLink}>
                            Data model
                          </a>
                        </p>
                        <p className={styles.description}>How to model and define data structures for efficient data persistence.</p>
                      </div>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/persist-cli-tool`} className={styles.titleLink}>
                            CLI tool
                          </a>
                        </p>
                        <p className={styles.description}>How to use the tool for generating client code and types for the data model.</p>
                      </div>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/persist-client-api`} className={styles.titleLink}>
                            Type-safe client API
                          </a>
                        </p>
                        <p className={styles.description}>Generated client, types, and their usages for managing data persistence.</p>
                      </div>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/supported-data-stores`} className={styles.titleLink}>
                            Supported data stores
                          </a>
                        </p>
                        <p className={styles.description}>Data stores for managing data persistence.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4} lg={4} className={styles.boxCol}>
                <div className={styles.cardWrapper}>
                  <div>
                    <h3 id='observability' className='section'>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-link-45deg mdButton pe-2"
                        viewBox="0 0 16 16"
                        onClick={(e) => props.getLink(e.target, 'observability')}
                      >
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                      </svg>
                      Observability
                    </h3>
                    <div className={styles.cardDescription}>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/observe-ballerina-programs`} className={styles.titleLink}>
                            Observe Ballerina programs</a>
                        </p>
                        <p className={styles.description}>Basics of the observability functionalities that are provided for Ballerina programs.</p>
                      </div>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/observe-logs`} className={styles.titleLink}>
                            Observe logs</a>
                        </p>
                        <p className={styles.description}>How Ballerina supports observing logs of Ballerina programs.</p>
                      </div>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/observe-metrics`} className={styles.titleLink}>
                            Observe metrics</a>
                        </p>
                        <p className={styles.description}>How Ballerina supports observing metrics of Ballerina programs.</p>
                      </div>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/observe-tracing`} className={styles.titleLink}>
                            Observe tracing</a>
                        </p>
                        <p className={styles.description}>How Ballerina supports observing tracing of Ballerina programs.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4} lg={4} className={styles.boxCol}>
                <div className={styles.cardWrapper}>
                  <div>
                    <h3 id='java-interoperability' className='section'>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-link-45deg mdButton pe-2"
                        viewBox="0 0 16 16"
                        onClick={(e) => props.getLink(e.target, 'java-interoperability')}
                      >
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                      </svg>
                      Java interoperability
                    </h3>
                    <div className={styles.cardDescription}>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/call-java-code-from-ballerina`} className={styles.titleLink}>
                            Call Java code from Ballerina
                          </a>
                        </p>
                        <p className={styles.description}>Call existing Java code from Ballerina.</p>
                      </div>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/the-bindgen-tool`} className={styles.titleLink}>
                            The BindGen tool
                          </a>
                        </p>
                        <p className={styles.description}>The CLI tool that generates Ballerina bindings for Java classes.</p>
                      </div>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/ballerina-ffi`} className={styles.titleLink}>
                            Ballerina FFI
                          </a>
                        </p>
                        <p className={styles.description}>List of language features that enable Ballerina developers to call foreign code written in other programming languages.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4} lg={4} className={styles.boxCol}>
                <div className={styles.cardWrapper}>
                  <div>
                    <h3 id='build-native-binaries-with-graalvm' className='section'>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-link-45deg mdButton pe-2"
                        viewBox="0 0 16 16"
                        onClick={(e) => props.getLink(e.target, 'build-native-binaries-with-graalvm')}
                      >
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                      </svg>
                      Build native binaries with GraalVM
                    </h3>
                    <div className={styles.cardDescription}>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/graalvm-executable-overview`} className={styles.titleLink}>
                            GraalVM executable overview
                          </a>
                        </p>
                        <p className={styles.description}>The overview of GraalVM and the native executable.</p>
                      </div>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/build-the-executable-in-a-container`} className={styles.titleLink}>
                            Build the GraalVM executable in a container
                          </a>
                        </p>
                        <p className={styles.description}>Build and pack the GraalVM executable in a container.</p>
                      </div>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/build-the-executable-locally`} className={styles.titleLink}>
                            Build the GraalVM executable locally
                          </a>
                        </p>
                        <p className={styles.description}>Build the GraalVM executable locally from Ballerina.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4} lg={4} className={styles.boxCol}>
                <div className={styles.cardWrapper}>
                  <div>
                    <h3 id='reuse-code-with-ballerina-central' className='section'>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-link-45deg mdButton pe-2"
                        viewBox="0 0 16 16"
                        onClick={(e) => props.getLink(e.target, 'reuse-code-with-ballerina-central')}
                      >
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                      </svg>
                      Reuse code with Ballerina Central
                    </h3>
                    <div className={styles.cardDescription}>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/publish-packages-to-ballerina-central`} className={styles.titleLink}>
                            Publish packages to Ballerina Central
                          </a>
                        </p>
                        <p className={styles.description}>Publish your library package to Ballerina Central.</p>
                      </div>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/configure-a-network-proxy`} className={styles.titleLink}>
                            Configure a network proxy
                          </a>
                        </p>
                        <p className={styles.description}>Perform operations with the Ballerina Central over an HTTP proxy.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4} lg={4} className={styles.boxCol}>
                <div className={styles.cardWrapper}>
                  <div>
                    <h3 id='troubleshoot-the-runtime' className='section'>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-link-45deg mdButton pe-2"
                        viewBox="0 0 16 16"
                        onClick={(e) => props.getLink(e.target, 'troubleshoot-the-runtime')}
                      >
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                      </svg>
                      Troubleshoot the runtime
                    </h3>
                    <div className={styles.cardDescription}>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/strand-dump-tool`} className={styles.titleLink}>
                            Strand dump tool
                          </a>
                        </p>
                        <p className={styles.description}>Dump the status of currently running strands.</p>
                      </div>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/ballerina-profiler`} className={styles.titleLink}>
                            Ballerina Profiler (experimental)
                          </a>
                        </p>
                        <p className={styles.description}>Profile a Ballerina package and create a flame graph.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>

      <Row className="pageContentRow llanding" >
        <Col xs={12}>
          <Container>
            <Row>
              <Col xs={12}>
                <h2 id="resources" className='section'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-link-45deg mdButton pe-2"
                    viewBox="0 0 16 16"
                    onClick={(e) => props.getLink(e.target, 'resources')}
                  >
                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                  </svg>
                  Resources
                </h2>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6} lg={6} className={styles.boxCol}>
                <div className={styles.cardWrapper}>
                  <div>
                    <h3 id='featured-scenarios' className='section'>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-link-45deg mdButton pe-2"
                        viewBox="0 0 16 16"
                        onClick={(e) => props.getLink(e.target, 'featured-scenarios')}
                      >
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                      </svg>
                      Featured scenarios
                    </h3>
                    <div className={styles.cardDescription}>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/write-a-restful-api-with-ballerina/`} className={styles.titleLink}>
                            Write a RESTful API with Ballerina
                          </a>
                        </p>
                        <p className={styles.description}>Use Ballerina constructs to create RESTful APIs.</p>
                      </div>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/write-a-grpc-service-with-ballerina/`} className={styles.titleLink}>
                            Write a gRPC service with Ballerina
                          </a>
                        </p>
                        <p className={styles.description}>Write and invoke a simple Ballerina gRPC service.</p>
                      </div>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/manage-data-persistence-with-bal-persist/`} className={styles.titleLink}>
                            Manage data persistence with bal persist
                          </a>
                        </p>
                        <p className={styles.description}>Use <code>bal persist</code> to simplify data persistence management.</p>
                      </div>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/write-a-graphql-api-with-ballerina/`} className={styles.titleLink}>
                            Write a GraphQL API with Ballerina
                          </a>
                        </p>
                        <p className={styles.description}>Write and invoke a simple Ballerina GraphQL service.</p>
                      </div>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/work-with-data-using-queries-in-ballerina/`} className={styles.titleLink}>
                            Work with data using queries in Ballerina
                          </a>
                        </p>
                        <p className={styles.description}>Use query expressions to work with data.</p>
                      </div>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/build-a-data-service-in-ballerina/`} className={styles.titleLink}>
                            Build a data service in Ballerina
                          </a>
                        </p>
                        <p className={styles.description}>Use Ballerina constructs to work with data services.</p>
                      </div>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/deploy-ballerina-on-kubernetes/`} className={styles.titleLink}>
                            Deploy Ballerina on Kubernetes
                          </a>
                        </p>
                        <p className={styles.description}>Write, build, and deploy a Ballerina service on Kubernetes.</p>
                      </div>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/create-your-first-connector-with-ballerina/`} className={styles.titleLink}>
                            Create your first connector with Ballerina
                          </a>
                        </p>
                        <p className={styles.description}>Generate custom connectors using the Ballerina OpenAPI tool.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6} lg={6} className={styles.boxCol}>
                <div className={styles.cardWrapper}>
                  <div>
                    <h3 id='learn-the-language' className='section'>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-link-45deg mdButton pe-2"
                        viewBox="0 0 16 16"
                        onClick={(e) => props.getLink(e.target, 'learn-the-language')}
                      >
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                      </svg>
                      Learn the language
                    </h3>
                    <div className={styles.cardDescription}>
                      <div className={styles.content}>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/language-basics`} className={styles.titleLink}>
                            Language basics
                          </a>
                        </p>
                        <p className={styles.description}>Get started with basics that are common to all C-Family programming languages.</p>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/network-interaction`} className={styles.titleLink}>
                            Network interaction
                          </a>
                        </p>
                        <p className={styles.description}>Provide and consume services using Ballerina. </p>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/data`} className={styles.titleLink}>
                            Data
                          </a>
                        </p>
                        <p className={styles.description}>Work with data using Ballerina.</p>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/concurrency`} className={styles.titleLink}>
                            Concurrency
                          </a>
                        </p>
                        <p className={styles.description}>How concurrency and transactions are handled in Ballerina.</p>
                        <p className={styles.title}>
                          <a href={`${prefix}/learn/advanced-general-purpose-language-features`} className={styles.titleLink}>
                            Advanced general-purpose language features
                          </a>
                        </p>
                        <p className={styles.description}>Advanced features, which are additional options for the language.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      {/* </Container> */}

    </>
  );
}
