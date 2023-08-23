import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { Input, Radio } from "antd";
import "./Form.css";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";
import { Checkbox, Button } from "antd";
import logo from "../Assets/logo.jpg";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import axios from "axios";

const { Dragger } = Upload;

const Form = () => {
  const [next, setNext] = useState(true);
  const [email, setEmail] = useState("");
  const [returnStatus, setReturnStatus] = useState("");
  const [incorporationStatus, setIncorporationStatus] = useState("");
  const [ownershipChnage, setOwnershipChange] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [returnsDocuments, setReturnDocuments] = useState([]);
  const [incorporationDocuments, setIncorporationDocuments] = useState([]);
  const [sharholdingDocuments, setShareholdingDocuments] = useState([]);
  const [transactionDocuments, setTransactionDocuments] = useState([]);
  const [userDocuments, setUserDocuments] = useState([]);

  const data = {
    "user-email": email,
    "return-status": returnStatus,
    "return-documents-files": returnsDocuments,
    "incorporations-status": incorporationStatus,
    "incorporation-documents-files": incorporationDocuments,
    "ownership-change": ownershipChnage,
    "shareholding-pattern-files": sharholdingDocuments,
    "user-transactions": transactions,
    "transaction-documents-files": transactionDocuments,
    "user-documents": documents,
    "user-documents-files": userDocuments
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const props1: UploadProps = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      setReturnDocuments(e.dataTransfer.files);
    }
  };

  const props2: UploadProps = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      setIncorporationDocuments(e.dataTransfer.files);
    }
  };

  const props3: UploadProps = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      setShareholdingDocuments(e.dataTransfer.files);
    }
  };

  const props4: UploadProps = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      setTransactionDocuments(e.dataTransfer.files);
    }
  };

  const props5: UploadProps = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      setUserDocuments(e.dataTransfer.files);
    }
  };

  console.log(returnsDocuments);

  const getTransactions = (checkedValues: CheckboxValueType[]) => {
    setTransactions(checkedValues);
  };

  const getDocuments = (checkedValues: CheckboxValueType[]) => {
    setDocuments(checkedValues);
  };

  const getEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const getReturnStatus = (e) => {
    e.preventDefault();
    setReturnStatus(e.target.value);
  };

  const getIncorporationStatus = (e) => {
    e.preventDefault();
    setIncorporationStatus(e.target.value);
  };

  const getOwnershipChange = (e) => {
    e.preventDefault();
    setOwnershipChange(e.target.value);
  };

  const goToNext = () => {
    setNext(false);
  };

  const goBack = () => {
    setNext(true);
  };

  return (
    <form className="formContainer">
      {next ? (
        <div>
          <div className="inputContainer">
            <label for="email">
              Email <span className="redText">*</span>
            </label>
            <Input
              style={{ maxWidth: "300px" }}
              name="email"
              id="email"
              type="email"
              placeholder="example@example.com"
              onChange={getEmail}
            />
          </div>
          <div className="inputContainer">
            <label>Did you file the returns last year?</label>
            <div>
              <Radio.Group onChange={getReturnStatus} value={returnStatus}>
                <Radio value="yes">Yes</Radio>
                <br />
                <Radio value="no">No</Radio>
              </Radio.Group>
            </div>
          </div>
          <div className="inputContainer">
            <label>
              File Upload <span className="redText">*</span>
            </label>
            <div>
              {returnStatus === "yes" ? (
                <Dragger {...props1}>
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibited
                    from uploading company data or other banned files.
                  </p>
                </Dragger>
              ) : (
                <Dragger {...props1} disabled>
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibited
                    from uploading company data or other banned files.
                  </p>
                </Dragger>
              )}
            </div>
          </div>
          <div className="inputContainer">
            <label>Was the S-corp incorporated in 2022</label>
            <div>
              <Radio.Group
                onChange={getIncorporationStatus}
                value={incorporationStatus}
              >
                <Radio value="yes">Yes</Radio>
                <br />
                <Radio value="no">No</Radio>
              </Radio.Group>
            </div>
          </div>
          <div className="inputContainer">
            <label>
              Please Upload the Incorporation Documents:
              <span className="redText">*</span>
            </label>
            <div>
              {incorporationStatus === "yes" ? (
                <Dragger {...props2}>
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibited
                    from uploading company data or other banned files.
                  </p>
                </Dragger>
              ) : (
                <Dragger {...props2} disabled>
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibited
                    from uploading company data or other banned files.
                  </p>
                </Dragger>
              )}
            </div>
          </div>
          <div className="inputContainer">
            <label>Was there any change in Ownership Structure in 2022?</label>
            <div>
              <Radio.Group
                onChange={getOwnershipChange}
                value={ownershipChnage}
              >
                <Radio value="yes">Yes</Radio>
                <br />
                <Radio value="no">No</Radio>
              </Radio.Group>
            </div>
          </div>
          <div className="inputContainer">
            <label>
              Upload latest Shareholding pattern.
              <span className="redText">*</span>
            </label>
            <div>
              {ownershipChnage === "yes" ? (
                <Dragger {...props3}>
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibited
                    from uploading company data or other banned files.
                  </p>
                </Dragger>
              ) : (
                <Dragger {...props3} disabled>
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibited
                    from uploading company data or other banned files.
                  </p>
                </Dragger>
              )}
            </div>
          </div>
          <div className="buttonsContaine">
            <button className="button">Save</button>
            <button className="button" onClick={goToNext}>
              Next
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="inputContainer">
            <span>Was there any following transaction in 2022?</span>
            <Checkbox.Group
              style={{ width: "100%" }}
              onChange={getTransactions}
            >
              <Row>
                <Col span={20}>
                  <Checkbox value="Capital Infusion">Capital Infusion</Checkbox>
                </Col>
                <Col span={20}>
                  <Checkbox value="Capital Withrawal">
                    Capital Withrawal
                  </Checkbox>
                </Col>
                <Col span={20}>
                  <Checkbox value="Related Party Transaction">
                    Related Party Transaction
                  </Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </div>
          <div className="inputContainer">
            <label>Upload documents for the same:</label>
            <div>
              <Dragger {...props4}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibited from
                  uploading company data or other banned files.
                </p>
              </Dragger>
            </div>
          </div>
          <div className="inputContainer">
            <span>Please upload the following documents:</span>
            <Checkbox.Group style={{ width: "100%" }} onChange={getDocuments}>
              <Row>
                <Col span={20}>
                  <Checkbox value="Bank Statement">Bank Statement</Checkbox>
                </Col>
                <Col span={20}>
                  <Checkbox value="Credit Card Statement">
                    Credit Card Statement
                  </Checkbox>
                </Col>
                <Col span={20}>
                  <Checkbox value="Form 10991">Form 10991</Checkbox>
                </Col>
                <Col span={20}>
                  <Checkbox value="Form 940 / 941">Form 940 / 941</Checkbox>
                </Col>
                <Col span={20}>
                  <Checkbox value="EIN Certificate">EIN Certificate</Checkbox>
                </Col>
                <Col span={20}>
                  <Checkbox value="IRS Acceptance Letter of S-Corp">
                    IRS Acceptance Letter of S-Corp
                  </Checkbox>
                </Col>
                <Col span={20}>
                  <Checkbox value="Financials">
                    Financials (if prepared)
                  </Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </div>
          <div className="inputContainer">
            <span className="redText">*</span>
            <div>
              <Dragger {...props5}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibited from
                  uploading company data or other banned files.
                </p>
              </Dragger>
            </div>
          </div>
          <div className="paymentCheckContainer">
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Checkbox
                className="leftMargin"
                value="confirmPayement"
              ></Checkbox>
              <img width="60px" src={logo} alt="logo" />
              <span>Eazytaxes</span>
            </div>
            <span style={{ fontWeight: "bold" }}>$349.00</span>
          </div>
          <div className="lastSectionContainer">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "10px 0px 20px"
              }}
            >
              <div>
                <Input
                  style={{ maxWidth: "150px", marginRight: "5px" }}
                  type="text"
                  placeholder="Enter Coupon Code"
                />
                <Button type="primary">Apply</Button>
              </div>
              <div style={{ fontWeight: "bold" }}>
                <span>Total $0.00</span>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <button onClick={goBack} className="button">
                  Back
                </button>
              </div>
              <div>
                <button className="button" style={{ marginRight: "10px" }}>
                  Save
                </button>
                {email !== "" &&
                returnStatus !== "" &&
                incorporationStatus !== "" &&
                ownershipChnage !== "" &&
                documents.length !== 0 ? (
                  <button className="button" onClick={handleSubmit}>
                    <Link
                      style={{ textDecoration: "none", color: "#ffffff" }}
                      to="./thanks"
                    >
                      Submit
                    </Link>
                  </button>
                ) : (
                  <Button disabled>Submit</Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default Form;
