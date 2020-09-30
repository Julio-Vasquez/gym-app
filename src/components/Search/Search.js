import React, { useState } from 'react'
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";

export const Search = () => {
  let searchInput;
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex, title) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={
            (node) => searchInput = node
          }
          placeholder={`Buscar por ${title}`}
          value={selectedKeys[0]}
          onChange={
            e => setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={
            () => handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={
            () => handleSearch(selectedKeys, confirm, dataIndex)
          }
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          <SearchOutlined />
          Buscar
        </Button>
        <Button
          onClick={
            () => handleReset(clearFilters)
          }
          size="small"
          style={{ width: 90 }}
        >
          Limpiar
        </Button>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) setTimeout(() => searchInput.select());
    },
    render: (text) => searchedColumn === dataIndex
      ? <Highlighter
        highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
        searchWords={[searchText]}
        autoEscape
        textToHighlight={text.toString()}
      />
      : (text)
  });

  return getColumnSearchProps;
}
