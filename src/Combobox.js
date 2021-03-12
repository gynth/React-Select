import Select from 'react-select';
import { useState } from 'react';
import PropTypes from 'prop-types';

// export const 

const Combobox = (props, e2) => {

  const optionList = [
    { value: '0', value2: '00', label: '',  },
    { value: '1', value2: '11', label: 'strawberry2',  },
    { value: '2', value2: '22', label: <label style={{whiteSpace:'nowrap'}}>ㅋㅋxxxxxxxxxxxxxxxxxxxㅋㅋㅋ</label> },
    { value: '3', value2: '33', label: 'Van111111111111111111i2222222222222lla1' },
    { value: '4', value2: '44', label: 'Vani112222222222222lla1' },
    { value: '5', value2: '55', label: 'asdf' }
  ]
  
  const height   = props.height;
  const fontSize = props.fontSize;
  const width    = props.width;

  if(props.id === 'cb1')
    optionList.push({ value: '6', value2: '66', label: '666' })
 
  const [options, setOption] = useState(optionList);
  const [isFoucs, setFocus] = useState('none');
  
  //#region 스타일
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
      padding: 0,
      display: isFoucs //'none', 'flex'
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
      margin: '0px 0px 0px 4px',
      display: isFoucs //'none', 'flex'
    })
  }
  //#endregion

  //#region 이벤트
  const onFocusBase = (e) => {
    setFocus('flex');
    props.onFocus(e);
  };

  const onBlurBase = (e) => {
    setFocus('none');
    props.onBlur(e);
  };

  const onInputChangeBase = (value, action) => {
    if(action.action === 'input-change'){
      setOption(
        optionList.filter((e) => {
          if(typeof(e.label) === 'string'){
            return e.label.toLowerCase().indexOf(value.toLowerCase()) >= 0;
          }else if(e.label.props !== undefined){
            return e.label.props.children.toLowerCase().indexOf(value.toLowerCase()) >= 0
          }else 
            return false;
        })
      )
    }
  };
  //#endregion

  return (
    <>
      {props.label !== '' && props.label !== undefined &&
        <div style={{float:'left', marginRight:'3px'}}>
          <label htmlFor={props.id}>{props.label}</label>
        </div>
      }

      <div style={{float:'left'}}>
        <Select options={options}  
                styles={customStyles}
                inputId={props.id}
                filterOption={null}
              
                // defaultValue={option[1]} //이건 이방법뿐인듯 따로 기능구현
                onFocus={(e) => onFocusBase(e)}
                onBlur={(e) => onBlurBase(e)}

                onInputChange={(value, action) => onInputChangeBase(value, action)}
        />
      </div>
{/* 
      <button style={{width:100, height:50}} 
        onClick={() => {
          setOption(optionList.filter(e => e.value2 === '22'))
        }}
      />
      <button style={{width:100, height:50}} 
        onClick={() => {
          setOption(optionList)
        }}
      /> */}
    </>
  );
}

Combobox.propTypes = {
  id          : PropTypes.string.isRequired,
  width       : PropTypes.number,
  height      : PropTypes.number,
  fontSize    : PropTypes.number,
  label       : PropTypes.string,
  menuIsOpen  : PropTypes.bool,
  isRtl       : PropTypes.bool,
  isSearchable: PropTypes.bool,
  isMulti     : PropTypes.bool,
  blurInputOnSelect: PropTypes.bool,
  closeMenuOnSelect: PropTypes.bool,

  onChange    : PropTypes.func,
  onMenuOpen  : PropTypes.func,
  onMenuClose : PropTypes.func,
  onFocus     : PropTypes.func,
  onBlur      : PropTypes.func
};

Combobox.defaultProps = {
  id          : undefined,
  width       : 150,
  height      : 23,
  fontSize    : 13,
  label       : '',
  menuIsOpen  : false,
  isRtl       : false,
  isSearchable: true,
  isMulti     : false,
  blurInputOnSelect: false,
  closeMenuOnSelect: false,

  onChange    : (e) => {},
  onMenuOpen  : () => {},
  onMenuClose : () => {},
  onFocus     : (e) => {},
  onBlur      : (e) => {}
};

export default Combobox;
