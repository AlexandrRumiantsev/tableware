import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Menu extends Component {
  popappCreate(data){
    const obj = this;
    var fieldsFormAdd = {
      '0':{
        'default': 3,
        'role': 'main',
        'title': 'слой',
        'type': 'section',
        'fields': {
          'className': 'section',
          'onclick': function(){
            this.remove();
          }
        },
        'inElement':{
            '0': {
            'default': 3,
            'title': '',
            'type': 'main',
            'fields': {
              'className': 'section__box',
              'onclick': function(e){
                e.stopPropagation();;
              }
            },
            'inElement':{
                '0':{
                'default': 1,
                'title': 'закрыть',
                'type': 'header',
                'fields': {
                  'className': 'section__close',
                  'innerText': 'Закрыть',
                  'onclick': function(){
                      this.parentElement.parentElement.remove();
                  }
                },
              },
             '1':{
                'default': 3,
                'title': 'Логин',
                'type': 'div',
                'fields': {
                    'className': 'section__box__log'
                },
                'inElement':{
                  '0':{
                    'default': 1,
                    'title': '',
                    'type': 'input',
                    'fields': {
                      'className': 'log__input'
                    },
                }
              }
            },
            '2':{
                  'default': 3,
                  'title': 'Пароль',
                  'type': 'div',
                  'fields': {
                      'className': 'section__box__pas'
                  },
                  'inElement':{
                    '0':{
                    'default': 1,
                    'title': '',
                    'type': 'input',
                    'fields': {
                      'className': 'pas__input',
                    },
                  }
                }
              },
              '3':{
                  'default': 3,
                  'title': 'Имя',
                  'type': 'div',
                  'fields': {
                      'className': 'section__box__name'
                  },
                  'inElement':{
                    '0':{
                    'default': 1,
                    'title': '',
                    'type': 'input',
                    'fields': {
                      'className': 'name__input'
                    },
                  }
                }
              },
              '4':{
                'default': 3,
                'title': 'Отправить',
                'type': 'div',
                'fields': {
                    'className': 'section__box__sbm'
                },
                'inElement':{
                  '0':{
                  'default': 1,
                  'title': '',
                  'type': 'input',
                  'fields': {
                    'className': 'sbm__input',
                    'type': 'submit'
                  },
                }
              }
            }
            }
          }
        }
      }

  }

    
    document.body.appendChild(
        this.parser(fieldsFormAdd)
    );
    
    
}

parser(fields , group = ''){
    const obj = this;
    let form;
  if(fields)
    Object.keys(fields).forEach(function(element) {
               
      if(fields[element].default == 1){
          group.appendChild(obj.createElem(fields[element]));
      }else if(fields[element].default == 3){
        form =  obj.createGroup(fields[element]);
      
        if(fields[element].inElement){
          console.log(
            obj.parser(fields[element].inElement , form )
          )
        }
        if(fields.inElement){
          console.log(
            obj.parser(fields.inElement , form )
          )
        }
        
                    
        if(group != ''){
          group.appendChild(
            form
          )
          
        }
          
      }
        
      
      
  })
     return form;
};

createElem(elem){
   console.log('Создаю Простой элемент');
   var el = document.createElement(elem.type);

   Object.keys(elem.fields).forEach(function(elementField) {
    el[elementField] = elem.fields[elementField]
   })
   
   return el;
}


createGroup(el){

  
  let fld = document.createElement(el.type);

  Object.keys(el.fields).forEach(function(elementField) {
    fld[elementField] = el.fields[elementField]
   })
  
   return fld;
}
  render() {
    const { data } = this.props
   
    return <div className='app__menu'>
      <div>Привет, {data.name}!</div>
      <div onClick={ () => { this.popappCreate() } }>Войти</div>
    </div>
  }
}

Menu.propTypes = {
  name: PropTypes.string.isRequired
}