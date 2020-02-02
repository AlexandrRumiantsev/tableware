import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Api extends Component {
  componentWillMount(){
    //type , url , setting
    
    let setting = [
      "setRequestHeader('accept', 'application/json')"
    ]
    this.props.setApi('GET' , 'getCatalog' , setting)
  }

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
            'title': 'Карточка товара',
            'type': 'main',
            'fields': {
                'id': 'fid_' + data.id,
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
                'default': 1,
                'title': 'Наименование',
                'type': 'main',
                'fields': {
                  'className': 'section__name',
                  'innerText': data.title
                },
              },
              '2':{
                'default': 1,
                'title': 'Описание',
                'type': 'footer',
                'fields': {
                    'className': 'section__discr',
                  'innerText': data.discr
                },
              },
              '3':{
                'default': 1,
                'title': 'Статистика товара',
                'type': 'span',
                'fields': {
                    'className': 'goods__statistik',
                  'innerText': 'Статистика товара',
                  'onclick': function(){
                      
                  }
                },
              },
              '4':{
                'default': 1,
                'title': 'Статистика товара',
                'type': 'img',
                'fields': {
                    'className': 'goods__img',
                  'src': 'http://tableware.alexweber.ru/api/img/d-51.png',
                  'onclick': function(){
                     
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
          obj.parser(fields[element].inElement , form );
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
   console.log(el);
   return el;
}


createGroup(el){
  console.log('Создаю Группу');
  
  let fld = document.createElement(el.type);

  Object.keys(el.fields).forEach(function(elementField) {
    fld[elementField] = el.fields[elementField]
   })
  
   return fld;
}
  render() {
    console.log(this.props.name.api);
    if(this.props.name.api== undefined)
    return <div>
      <p>Фильтры</p>
      <p>Данные загржаются</p>
    </div>
    else
    return <div>
    
  
       <div class='goods'>
        { JSON.parse(this.props.name.api).map(n =>
          <div className='goods__item' onClick={ () => { this.popappCreate(n); } } id={n.id} key={n.id}>
              <div className='goods__title'>{ n.title }</div>
          </div>  
        )}
      </div>
    </div>
  }
}