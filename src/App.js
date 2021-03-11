import Select from 'react-select'

function App() {
  const height   = 30;
  const fontSize = 13;
  const width    = 150;
  
  const customStyles = {
    // menu: (provided, state) => ({
    //   // ...provided,
    //   // width: state.selectProps.width,
    //   width: 100,
    //   // borderBottom: '1px dotted pink',
    //   // color: state.selectProps.menuColor,
    //   padding: 10,
    // }),
    container: (base) => ({
      // none of react-select's styles are passed to <Control />
      ...base,
      width: width,
      height:height,
      margin:0
    }),
  
    control: (base) => ({
      ...base,
      height:height,
      minHeight:height,
      fontSize:fontSize,
      margin:0
    }),

    valueContainer: (base) => ({
      ...base,
      height:height - 3,
      padding:0
    }),

    indicatorsContainer: (base) => ({
      ...base,
      height: height - 3,
      padding: 0
    }),

    indicatorSeparator: (base) => ({
      ...base,
      // margin:
    }),
    
    input: (base) => ({
      ...base,
      margin: '0px 0px 0px 3px'
    }),
  
    // menu: (base) => ({
    //   ...base,
    //   fontSize:fontSize,
    //   marginTop: 1,
    //   width: '100%'
    // }),

      
    menu: (e1, e2) => {
      console.log(e2.options.map(e => {
        console.log(e, typeof(e.label))
      }))
    },
  
    singleValue: (base) => ({
      ...base,
      margin: '0px 0px 0px 4px'
    }),

    placeholder: (base) => ({
      ...base,
      margin: '0px 0px 0px 4px'
    })
  }

  const option = [
    { value: 'strawberry', label: 'strawberry2' },
    { value: 'chocolate', label: <label style={{whiteSpace:'nowrap'}}>ㅋㅋxxxxxxxxxxxxxxxxxxxㅋㅋㅋ</label> },
    { value: 'vanilla', label: 'Van111111111111111111illa1' },
    { value: 'vanilla2', label: 'Vani112222222222222lla1' }
  ]

  return (
    <div style={{margin:10}}>
      <Select options={option}  
        styles={customStyles}
        
        size={1}
        // menuIsOpen = {true}
        // isSearchable = {false}
        // isRtl = {true} 좌우반전
        // defaultValue={option[1]} //이건 이방법뿐인듯 따로 기능구현
        // onChange={(e1, e2, e3) => console.log(e1, e2) }        
        // onFocus={(e1) => console.log(e1)}
        // onBlur={(e1) => console.log(e1)}
        // blurInputOnSelect = {true} // 선택후 포커스 빠지게 하는 기능
        // closeMenuOnSelect = {true} // 선택후 리스트 닫히는 기능
        // isMulti = {true} // 멀티선택기능
        // onMenuOpen = {() => 'undefined'}
        // onMenuClose = {() => 'undefined'} 
        id='test'
      />

      <button style={{width:50, height:20}} />
    </div>
  );
}

export default App;
