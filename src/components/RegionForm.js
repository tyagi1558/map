import React, { useState } from "react";
import "../css/regionform.css";
import { Form, Select, Button } from "antd";
import { useDispatch } from "react-redux";

function RegionForm() {
  const [region, setRegion] = useState(null);
  const dispatch = useDispatch();

  const handleRegionChange = (value) => {
    setRegion(value);
  };

  const handleLoadButtonClick = () => {
    dispatch({ type: "SET_SELECTED_REGION", payload: region });
    dispatch({
      type: "SET_REGION_INFO",
      payload: region
    });
    // TODO: Load region info using Turf.js and dispatch 'SET_REGION_INFO' action
  };

  return (
    <div className="region-form">
      <Form layout="inline" className="inline">
        <Form.Item label="Region">
          <Select defaultValue={null} onChange={handleRegionChange}>
            <Select.Option value="us">United States</Select.Option>
            <Select.Option value="in">India</Select.Option>
            <Select.Option value="uk">United Kingdom</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleLoadButtonClick}>
            Load
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default RegionForm;
