import React, { Component , useState } from 'react'
import ReactDOM from 'react-dom';

export function enterAdmin(data){
    const self = data;
    ReactDOM.render(
      React.createElement(
        "div",
        {
            id: "add-page"
        },
        React.createElement(
            "div",
            {
                className: "add-container"
            },
            React.createElement("h1", null, "Добавить проект"),
            
            React.createElement(
              "form",
              {
                  className: "colm-container",
                  id: "add_form",
                  encType: "multipart/form-data"
              },

            React.createElement(
              "div",
              {
                  className: "colm-right"
              },
              React.createElement("span", null, "Наименование товара"),
              React.createElement("span", null, "Изображение"),
              React.createElement("span", null, "Описание"),
              React.createElement("span", null, ""),
            ),

            React.createElement(
              "div",
              {
                  className: "colm-left"
              },
                React.createElement(
                "div",
                {
                    className: "colm-content"
                },
                  React.createElement("input", {
                    type: "text",
                    value: "text",
                    onInput: function onInput(e) {
                        alert(e.target.value);
                    }
                  }),
                ), 
                
                React.createElement(
                  "div",
                  {
                      className: "colm-content"
                  },
                  React.createElement("input", {
                    type: "file",
                    id: 'file-target',
                    name: 'file',
                    crossorigin: "anonymous",
                    accept: "image/*",
                    onInput: function onInput(e) {
                      var input = event.target;
                      var reader = new FileReader();
                      reader.onload = function(){
                        var dataURL = reader.result;
                        var output = document.querySelector('#img');
                        output.src = dataURL;
                      };
                      reader.readAsDataURL(input.files[0]);
                    }
                  }),
                  React.createElement("div", {
                    className: "file-in",
                    id: 'file-in',
                    onClick: function (e) {
                      console.log(e.target);
                      document.getElementById('file-target').click();
                    },
                    
                  },
                  React.createElement("img", {
                    id: 'img'
                  })
                  ),
                ),
                
                React.createElement(
                  "div",
                  {
                      className: "colm-content"
                  },
                  React.createElement("textarea", {
                    value: "text",
                    name: "discription",
                    onInput: function onInput(e) {
                        alert(e.target.value);
                    }
                  }),
                ),
                
                React.createElement(
                  "div",
                  {
                      className: "colm-content"
                  },
                  React.createElement("input", {
                    type: "submit",
                    value: "Добавить",
                    onClick: function onInput(e) {
                      e.preventDefault();
                      console.log(e.target.value);
                      console.log(self(
                        document.forms.add_form
                      ));
                    }
                  }),
                )
              ),
            )
            
            
          ),
      ),
     document.getElementById('app')
   );
 }
