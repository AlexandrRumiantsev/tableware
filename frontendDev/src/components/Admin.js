import React, { Component , useState } from 'react'
import ReactDOM from 'react-dom';

export function enterAdmin(){
    ReactDOM.render(
        React.createElement(
            "div",
            {
                className: "appm"
            },
            React.createElement("h1", null, "Добавить проект"),
            React.createElement(
              "div",
              {
                  className: "appm"
              },
              React.createElement("span", null, "text"),
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
                  className: "appm"
              },
              React.createElement("span", null, "text"),
              React.createElement("input", {
                type: "text",
                value: "text",
                onInput: function onInput(e) {
                    alert(e.target.value);
                }
              }),
            )
          ),
     document.getElementById('app')
   );
 }
