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
    { value: '0', value2: '00', label: '',  },
    { value: '1', value2: '11', label: 'strawberry2',  },
    { value: '2', value2: '22', label: <label style={{whiteSpace:'nowrap'}}>ㅋㅋxxxxxxxxxxxxxxxxxxxㅋㅋㅋ</label> },
    { value: '3', value2: '33', label: 'Van111111111111111111i2222222222222lla1' },
    { value: '4', value2: '44', label: 'Vani112222222222222lla1' },
    { value: '5', value2: '55', label: 'asdf' }
  ]

  const [options, setOption] = useState(option);

  return (
    <>
      <div style={{float:'left', marginRight:'3px'}}>
        <label htmlFor='test2'>ggg</label>
      </div>

      <div style={{float:'left'}}>
        <Select options={options}  
                styles={customStyles}
                inputId='test2'

                filterOption={null}
              
                // menuIsOpen = {true}
                // isRtl = {true} 좌우반전
                // defaultValue={option[1]} //이건 이방법뿐인듯 따로 기능구현
                // onChange={(e1, e2) => console.log(e1, e2) }        
                // onFocus={(e1) => console.log(e1)}
                // onBlur={(e1) => console.log(e1)}
                // blurInputOnSelect = {true} // 선택후 포커스 빠지게 하는 기능
                // closeMenuOnSelect = {true} // 선택후 리스트 닫히는 기능
                // isMulti = {true} // 멀티선택기능
                //  onMenuOpen = {() => setSearchInput({'value': '1'})}
                // onMenuClose = {() => 'undefined'} 
                // isSearchable = {false}
                onInputChange={(value, action) => {
                  if(action.action === 'input-change'){
                    setOption(
                      option.filter((e) => {
                        if(typeof(e.label) === 'string'){
                          return e.label.indexOf(value) >= 0;
                        }else if(e.label.props !== undefined){
                          return e.label.props.children.indexOf(value) >= 0
                        }else return false;
                      })
                    )
                    // setOption(option.filter(e => e.label.indexOf(value) >= 0))
                  }
                }}
        />
      </div>

      <button style={{width:100, height:50}} 
        onClick={() => {
          setOption(option.filter(e => e.value2 === '22'))
        }}
      />
      <button style={{width:100, height:50}} 
        onClick={() => {
          setOption(option)
        }}
      />
    </>
  );
}

export default Combobox;
