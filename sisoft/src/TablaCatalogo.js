import React from 'react';
import { Table, Input, Button } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined} from '@ant-design/icons';



/*
function function_name() {

    for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

  // body...
}

*/



export default class TablaCatalogo extends React.Component {

  constructor(props)
  {
    super(props);
  this.state = {
    searchText: '',
    searchedColumn: '',
    selectedRowKeys:[]
  };
  this.onSelectChange=this.onSelectChange.bind(this);
}



 onSelectChange(selectedRowKeys) {
    //console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };





  getColumnSearchProps = dataIndex => ({



    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {



const datas=this.props.datas;
console.log(datas);


const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };









    const columns = [
       {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        width: '4%',
        ...this.getColumnSearchProps('id'),
      },
      {
        title: 'Producto',
        dataIndex: 'name',
        key: 'name',
        width: '70%',
        ...this.getColumnSearchProps('name'),
      },
      {
        title: 'Precio',
        dataIndex: 'precio',
        key: 'precio',
        width: '10%',
        ...this.getColumnSearchProps('precio'),
      },
      {
        title: 'Ilustración',
        dataIndex: 'nombre_imagen',
        key: 'nombre_imagen',
        width: '10%',
   
      },
          {
        title: 'Existencias',
        dataIndex: 'existencias',
        key: 'existencias',
        width: '10%',
      
      },
   
    ];
    return <Table rowSelection={rowSelection}  columns={columns} dataSource={datas} />;
  }
}
