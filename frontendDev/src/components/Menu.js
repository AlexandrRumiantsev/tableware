import React, { Component , useState } from 'react'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Admin , formAdmPanel , enterAdmin} from './Admin'

export default class Menu extends Component {
  popappCreate(data){
    const self = this;
     
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
            'type': 'form',
            'fields': {
              'className': 'section__box',
              'id':'form_reg',
              'onclick': function(e){
                e.stopPropagation();;
              }
            },
            'inElement':{
              '0':{
                'default': 1,
                'title': '',
                'type': 'h1',
                'fields': {
                  'innerText': 'Регистрация',
                  'className': 'box__title',
                  'onclick': function(){
                     
                  }
                },
              },
              '1':{
                'default': 1,
                'title': '',
                'type': 'i',
                'fields': {
                  'className': 'far fa-times-circle',
                  'onclick': function(){
                      this.parentElement.parentElement.remove();
                  }
                },
              },
             '2':{
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
                      'id': 'name__log' , 
                      'name': 'user[name__log]',
                      'placeholder': "Логин",
                      'className': 'log__input'
                    },
                }
              }
            },
            '3':{
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
                      'id': 'name__pas' , 
                      'name': 'user[name__pas]',
                      'placeholder': "Пароль",
                      'className': 'pas__input',
                    },
                  }
                }
              },
              '4':{
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
                      'id': 'name__input' ,
                      'name': 'user[name__input]',
                      'placeholder': "Имя",
                      'className': 'name__input'
                    },
                  }
                }
              },
              '5':{
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
                    'type': 'submit',
                    'onclick': function(e){
                      console.log(e);
                        e.stopPropagation();
                        e.preventDefault();

                        
          
                        const { registration } =  self.props
                        //console.log(document.forms.form_reg.name__log)
                        registration(
                          document.forms.form_reg ,
                          function(resp){
                            document.querySelector('section.section').remove();
                            document.querySelector('.overlay').remove();
                            alert(resp);
                          } 
                        );
                        
                    }
                  },
                },
              }
              },
              '6':{
                'default': 1,
                'title': 'Авторизация',
                'type': 'div',
                'fields': {
                    'innerText':'Авторизация',
                    'className': 'section__box__autorize',
                    'onclick': function(){
                          document.querySelector('section.section').remove();
                          document.body.appendChild(
                            self.parser(fieldsFormIn)
                        );
                    }
                },
            }
          }
        }
      }
    }
  }
   



  var fieldsFormIn = {
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
          'type': 'form',
          'fields': {
            'id': 'form_aut',
            'className': 'section__box',
            'onclick': function(e){
              e.stopPropagation();;
            }
          },
          'inElement':{
            '0':{
              'default': 1,
              'title': '',
              'type': 'h1',
              'fields': {
                'innerText': 'Авторизация',
                'className': 'box__title',
                'onclick': function(){
                   
                }
              },
            },
            '1':{
              'default': 1,
              'title': '',
              'type': 'i',
              'fields': {
                'className': 'far fa-times-circle',
                'onclick': function(){
                    this.parentElement.parentElement.remove();
                }
              },
            },
           '2':{
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
                    'id': 'name__log',
                    'placeholder': "Логин",
                    'className': 'log__input'
                  },
              }
            }
          },
          '3':{
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
                    'id': 'name__pass',
                    'placeholder': "Пароль",
                    'className': 'pas__input',
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
                  'type': 'submit',
                  'onclick': function(e){
                      alert('Авторизация');
                      e.preventDefault();
                      const { autorize } =  self.props
                      console.log(document.forms.form_aut);
                      autorize(
                        document.forms.form_aut
                      );
                      document.querySelector('section.section').remove();
                      document.querySelector('.overlay').remove();
                  }
                },
              },
            }
            },
            '5':{
              'default': 1,
              'title': 'Авторизация',
              'type': 'div',
              'fields': {
                  'innerText':'Регистрация',
                  'className': 'section__box__autorize',
                  'onclick': function(){
                        document.getElementById('form_reg').remove();
                        document.body.appendChild(
                          self.parser(fieldsFormAdd)
                      );
                  }
              },
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
    const { data , admin} = this.props
    //console.log(admin);
    let admPanel;
    (data.role == 'admin') ? admPanel = true : admPanel = false;

    return <div className='app__menu'>
      <div className='menu__list'>
          { <List /> }
      </div>
      <div>Привет, {data.name}!</div>
      {admPanel ? <Panel admin={admin}  /> : <div onClick={ () => { this.popappCreate() } }>Войти</div>}
    </div>
  }
}

Menu.propTypes = {
  name: PropTypes.string.isRequired
}


function List() {
 
    return (
      <a href=''> 
          Тестовая страница
      </a>
    )
  
}
/*function Panel() { 
  const [count, setCount , loadWorksheep] = useState(0);
  return (<div>{ this.state.loadWorksheep ? <Panel/> : <Admin/> }</div>);
}*/

function Panel(props) {
  const REACT_VERSION = React.version;
  console.log(props.admin);
  const logout = function(){
    sessionStorage.removeItem('user');
    window.location.href = window.location.href;
  }
  
  return (
    <div> 
      <div>React version: {REACT_VERSION}</div>
      {/* <button onClick={() => setCount(count + 1)}>
        setCount
      </button> */}
      <button onClick={() => enterAdmin(props.admin) }>
        Административная панель
      </button>
      <button onClick={() => logout() }>
        Выйти
      </button>
    </div>
  );
}
