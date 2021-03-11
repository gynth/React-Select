import Select from 'react-select';
import { useState } from 'react';

const Combobox = (props) => {
  const height   = 30;
  const fontSize = 13;
  const width    = 150;
  
  const customStyles = {
    container: (base) => ({
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
    
    input: (base) => ({
      ...base,
      margin: '0px 0px 0px 3px'
    }),
  
    menu: (base, e2) => ({
      ...base,
      fontSize:fontSize,
      marginTop: 1,
      width: e2.selectProps.width,
    }),
  
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
    { value: '0', label: '',  },
    { value: '1', label: 'strawberry2',  },
    { value: '2', label: <label style={{whiteSpace:'nowrap'}}>ㅋㅋxxxxxxxxxxxxxxxxxxxㅋㅋㅋ</label> },
    { value: '3', label: 'Van111111111111111111i2222222222222lla1' },
    { value: '4', label: 'Vani112222222222222lla1' },
    { value: '5', label: 'asdf' }
  ]

  const filterOptions = (candidate, input) => {
    // candidate.map(e => console.log(e));
    // console.log(typeof(candidate.label))
    // if(type === 'S'){
    //   return candidate.label === input;
    // }

    if(input !== undefined && input !== ''){
      if(typeof(input) === 'string'){
        if(typeof(candidate.label) === 'string'){
          if(candidate.label.indexOf(input) >= 0){
            return true;
          }
        }else{
          if(candidate.label.props !== undefined){
            if(candidate.label.props.children.indexOf(input) >= 0){
              return true;
            }
          }else{
            return false;
          }
        }
      }
      return false;
    }else{
       return true;
    }
  };

  const [searchInput, setSearchInput] = useState('');

  return (
    <>
      <div style={{float:'left', marginRight:'3px'}}>
        <label htmlFor='test2'>ggg</label>
      </div>

      <div style={{float:'left'}}>
        <Select options={option}  
                styles={customStyles}
                inputId='test2'

                filterOption={(e1) => filterOptions(e1, searchInput)}
              
                onInputChange = {(input, action) => {
                  if(action.action === 'input-change')
                    setSearchInput(input)
                  }
                }
              // menuIsOpen = {true}
              // isSearchable = {false}
              // isRtl = {true} 좌우반전
              // defaultValue={option[1]} //이건 이방법뿐인듯 따로 기능구현
              // onChange={(e1, e2) => console.log(e1, e2) }        
              // onFocus={(e1) => console.log(e1)}
              // onBlur={(e1) => console.log(e1)}
              // blurInputOnSelect = {true} // 선택후 포커스 빠지게 하는 기능
              // closeMenuOnSelect = {true} // 선택후 리스트 닫히는 기능
              // isMulti = {true} // 멀티선택기능
              // onMenuOpen = {() => 'undefined'}
              // onMenuClose = {() => 'undefined'} 
        />
      </div>

      {/* <button style={{width:300, height:50}} 
        onClick={console.log(bb)}
      /> */}
    </>
  );
}

export default Combobox;
