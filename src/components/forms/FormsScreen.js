import React from 'react'
import { InputCounter } from './InputCounter'
import PasswordToogle from './PasswordToogle'
import SwitchCheck from './SwitchCheck'
import { TextareaCounter } from './TextareaCounter'

export const FormsScreen = () => {
  return (
    <div  className="cont">
        <h1>Formularios</h1>
        <section>
          <h2>input forms</h2>
          <div className="form-recipient">
            <div className='ttn-form-cont'>
              <label className='ttn-form-label' htmlFor='input1'>Input default</label>
              <input id='input1' type="text" className='ttn-input' placeholder='Input default...' />
            </div>
            <div className='ttn-form-cont ttn-form-required'>
              <label className='ttn-form-label' htmlFor='input1'>Input required</label>
              <input id='input1' type="text" className='ttn-input' placeholder='Input required...' />
            </div>
            <div className='ttn-form-cont ttn-form-disabled'>
              <label className='ttn-form-label' htmlFor='input1'>Input disabled</label>
              <input id='input1' type="text" className='ttn-input' placeholder='Input disabled...' disabled={true} />
            </div>
          </div>
        </section>
        <section>
          <h2>Select forms</h2>
          <div className="form-recipient">
            <div className='ttn-form-cont'>
              
              <label className='ttn-form-label' htmlFor='select1'>Select default</label>
              
                <select className="ttn-select"  id='select1'>
                  <option value="0">Select car:</option>
                  <option value="1">Audi</option>
                  <option value="2">BMW</option>
                  <option value="3">Citroen</option>
                  <option value="4">Ford</option>
                  <option value="5">Honda</option>
                  <option value="6">Jaguar</option>
                  <option value="7">Land Rover</option>
                  <option value="8">Mercedes</option>
                  <option value="9">Mini</option>
                  <option value="10">Nissan</option>
                  <option value="11">Toyota</option>
                  <option value="12">Volvo</option>
                </select>
            </div>
            <div className='ttn-form-cont ttn-form-required'>
              
              <label className='ttn-form-label' htmlFor='select2'>Select required</label>
              
                <select className="ttn-select"  id='select2'>
                  <option value="0">Select car:</option>
                  <option value="1">Audi</option>
                  <option value="2">BMW</option>
                  <option value="3">Citroen</option>
                  <option value="4">Ford</option>
                  <option value="5">Honda</option>
                  <option value="6">Jaguar</option>
                  <option value="7">Land Rover</option>
                  <option value="8">Mercedes</option>
                  <option value="9">Mini</option>
                  <option value="10">Nissan</option>
                  <option value="11">Toyota</option>
                  <option value="12">Volvo</option>
                </select>
            </div>
            <div className='ttn-form-cont ttn-form-disabled'>
              
              <label className='ttn-form-label' htmlFor='select3'>Select disabled</label>
              
                <select className="ttn-select" id='select3' disabled={true}>
                  <option value="0">Select car:</option>
                  <option value="1">Audi</option>
                  <option value="2">BMW</option>
                  <option value="3">Citroen</option>
                  <option value="4">Ford</option>
                  <option value="5">Honda</option>
                  <option value="6">Jaguar</option>
                  <option value="7">Land Rover</option>
                  <option value="8">Mercedes</option>
                  <option value="9">Mini</option>
                  <option value="10">Nissan</option>
                  <option value="11">Toyota</option>
                  <option value="12">Volvo</option>
                </select>
            </div>
            
          </div>
        </section>
        <section>
          <h2>Input password</h2>
          <div className="form-recipient">
              <PasswordToogle name='pass1'/>
          </div>
        </section>
        <section>
          <h2>Character counter</h2>
          <div className="form-recipient">
              <TextareaCounter />

              <InputCounter />
          </div>
        </section>
        <section>
          <h2>Input label group</h2>
          <div className="form-recipient">
          <div className='ttn-form-cont ttn-form-group'>
              <label className='ttn-form-label ttn-label-pre' htmlFor='input1'>https://</label>
              <input id='input1' type="text" className='ttn-input' placeholder='Input default...' />
            </div>
          
          <div className='ttn-form-cont ttn-form-group'>
              <input id='input1' type="text" className='ttn-input' placeholder='Input default...' />
              <label className='ttn-form-label ttn-label-post' htmlFor='input1'>.com</label>
            </div>
            <div className='ttn-form-cont ttn-form-group'>
              <input id='input1' type="text" className='ttn-input' placeholder='Input default...' />
              <button type='button' className='ttn-btn ttn-btn-primary ttn-btn-icon ttn-btn-icon-search' />
            </div>
            <div className='ttn-form-cont ttn-form-group'>
              <input id='input1' type="text" className='ttn-input' placeholder='Input default...' />
              <button type='button' className='ttn-btn ttn-btn-sm ttn-btn-primary ttn-btn-icon ttn-btn-icon-search' >Buscar</button>
            </div>
          </div>
        </section>
        <section>
          <h2>Switch checkbox</h2>
          <div >
            
              <SwitchCheck name='check1' title1='¿Está usted de acuerdo?' title2='Sí, estoy de acuerdo.'/>
            
              <SwitchCheck name='check2' title1='Sí, lo estoy.' title2='¿Seguro que está usted de acuerdo?'/>

              <SwitchCheck name='check3'/>
           
          </div>
        </section>
        
    </div>
  )
}
