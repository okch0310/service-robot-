import React, { Children, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, Tab, AppBar } from "@material-ui/core";

const Introduce = (props) => {
  const navigate = useNavigate();

  const [value, setValue] = useState(0);
  const handleTabs = (e, val) => {
    console.warn(val);
    setValue(val);
  };
  return (
    <div>
      <h1>Introduce page</h1>
      <AppBar position="static">
        <Tabs value={value} onChange={handleTabs}>
          <Tab label="1" />
          <Tab label="2" />
          <Tab label="3" />
          <Tab label="4" />
          <Tab label="5" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        111111
      </TabPanel>
      <TabPanel value={value} index={1}>
        222222
      </TabPanel>
      <TabPanel value={value} index={2}>
        333333
      </TabPanel>
      <TabPanel value={value} index={3}>
        44444
      </TabPanel>
      <TabPanel value={value} index={4}>
        55555
      </TabPanel>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Main
      </button>
    </div>
  );
};

function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <h1>{children}</h1>}</div>;
}
export default Introduce;
