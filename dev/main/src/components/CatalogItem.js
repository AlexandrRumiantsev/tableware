import React from 'react';

class CatalogItem extends React.Component {
    
    popappCreate(data){
        console.log(data);
        var fieldsFormAdd = {
					'0':{
						'default': 3,
						'role': 'main',
						'title': 'слой',
						'type': 'section',
						'fields': {
							'className': 'section'
						},
						'inElement':{
								'0': {
								'default': 3,
								'title': 'Карточка товара',
								'type': 'main',
								'fields': {
								    'id': 'fid_' + data.id,
									'className': 'section__box'
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
									}
								}
							}
						}
					}

			}
		
        
        document.body.appendChild(
            this.parser(fieldsFormAdd)
        );
        
       // ReactDOM.render(<CatalogItem />,  document.getElementById(data.id));
       
        
        
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
	
    render(){
     
        return ( 
           
           <div className='goods__item' id={this.props.data.id} key={this.props.data.id}>
                            <div onClick={ () => { this.popappCreate(this.props.data); } } className='goods__title'>{ this.props.data.title }</div>
           </div>
                        
        )
        
    }
}
export default CatalogItem;