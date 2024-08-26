class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
    this.setup();
  }

  THRID_PANEL_TABS = [
    ["ОБЬЯВЛЕНИЯ", ""],
    ["ВАКАНСИИ", ""],
    ["ВАКАНСИИ ОБЪЕДИНЕННЫЕ", ""],
    ["СОИСКАТЕЛИ", ""],
    ["ОТКЛИКИ", ""],
    ["ФИО", ""],
    ["АДРЕСА", ""],
    ["КОМПАНИИ", ""],
    ["УЧЕБНЫЕ ЗАВЕДЕНИЯ", ""],
    ["СОКР.Ю.Ф.", ""],
    ["АЛЬТЕРНАТИВНЫЕ", ""],
    ["ФИЛИАЛЫ", ""],
    // ["Квалификации", ""],
    ["КВАЛИФИКАЦИИ СПЕЦИАЛЬНОСТИ", ""],
    ["ТЕЛЕФОННЫЕ КОДЫ", ""],
    ["АДМИНИСТРАТОРЫ", ""],
    ["EMAIL РАССЫЛКА", ""],
    ["КАК БЫЛО КАК НАДО", ""],
    ["ПРЕФИКСЫ СЧЕТОВ", ""],
    ["ПОИСК", ""],
    ["БАНКИ", ""],
    ["РУБРИКАТОР", ""],
  ];

  NUMBER_OF_PAGINATION = [
    "<<",
    "first",
    "first",
    ">>",
  ];

  THIRD_PANEL_TAB_TEMPLATE = (
    tabName,
    icon, {
      classes,
      id,
      tabNameClasses
    } = {
      classes: "",
      id: "",
      tabNameClasses: "",
    }
  ) => {
    return /*html*/ `
        <div class="third-panel__tab" ${id ? `id=${id.trim()}` : ""}>
            ${
              icon
                ? `<span class="third-panel__tab-icon icon ads-icon in-panel ${classes}">${icon}</span>`
                : ""
            }
            <p class="third-panel__tab-text ${tabNameClasses}" title="${tabName}">${tabName}</p>
            
        </div>
    `;
  };

  NUMBER_OF_PAGINATION_TEMPLATE = (tabName, index) => {

    return /*html*/ `
            ${
              `<div class="${index == 0 || index == 1?'first_page':'number_of_pagination_div' &&
              index == this.NUMBER_OF_PAGINATION_TEMPLATE.length+14 ||
              index == this.NUMBER_OF_PAGINATION_TEMPLATE.length+13
              ?'next_page':'number_of_pagination_div' && 
              index == 2?'number_of_pagination_div number_of_pagination_div_active':'number_of_pagination_div'}">
                ${tabName}
              </div>`
            }
    `;
  };

  render() {
    const STYLE = /*html*/ `
            <style>
                .no-white{
                    white-space: nowrap !important;
                }
                .reversed{
                    display: inline-block !important;
                    transform: rotate(180deg);
                }
                .navbar-top__link svg {
                  fill: white;
                }
                .navbar-top__link:hover svg {
                  fill: red;
                }          
                .navbar-top-panel{
                    background-color: #414f51;
                    color: white;
                    height: 40px;
                    padding: 0 45px;
                    display:flex;
                    font-size: 18px;
                    justify-content: flex-end;
                    align-items: center;
                    
                    a{
                      color: white;
                      font-size: inherit;
                      text-decoration: none;
                      cursor: pointer;
                      display:flex;
                      align-items: center;
                    }
                    a:hover {
                      color: red;
                      font-family: 'Inter-Bold';
                    }
                    
                }
                .content_header_section{
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
            }    
            .popap_import_expor_addNew_content_main{
              height:100% ;
            }
            .popap_import_expor_addNew_content_footer{
              padding:32px
            }
            .popap_import_expor_addNew_content_footer >button{
              margin:7px;
            }
              .date-picker-container{
                  position: relative;
                  border:1px solid #9C9C9C;
              }
              .date-picker-container::before{
                  content:'';
                  position:absolute;
                  width: 100%;
                  height:100%;
                  background:#fff;
              }
              .date-picker-text{
                  position: absolute;
                  z-index: 0;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  width: 100%;
                  height:100%;
                    cursor:pointer;
                  color:#9C9C9C;
              }
              .date-picker-text img{
                  margin:0 6px 0 0 ;
              }
              .add-new-one{
                  color:#9C9C9C;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background:#fff;
                  cursor:pointer;
                  border:1px solid #9C9C9C;
              }
              .in-total{
                  color:#9C9C9C;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background:#fff;
                  border:1px solid #9C9C9C;
                  cursor:pointer;
              }
              .in-total >span{
                  color:#4fa95d;
              }
              .import_export{
                  color:#9C9C9C;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background:#fff;
                  border:1px solid #9C9C9C;
                  cursor:pointer;
              }
              .popap_import_expor_addNew{
                  position: fixed;
                  z-index: 2;
                  top: 0;
                  left: 0;
                  background:#3f3f3f75;
                  height: 100vh;
                  width: 100%;
                  display: none;
                  justify-content:center;
                  align-items:center;
              }
              .popap_import_expor_addNew_parrent{
                    max-width: 1200px;
                      width: 100%;
                      height: 100%;
                      display: flex;
              }
              td >input{
                border:none
              }
              .popap_import_expor_addNew_content{
                  background:#fff;
                  height:100%;
                  width: 90%;
                  display: flex;
                  flex-direction: column;
              }
              .popap_import_expor_addNew_cloase{
                  height:100%;
                  width: 5%;
              }
              .popap_import_expor_addNew_shadow{
                  background:yellow;
                  height:100%;
                  width: 5%;
              }
              .popap_import_expor_addNew_shadow{
                  opacity: 0;
              }
              .popap_import_expor_addNew_cloase{
                  max-width:50px;
                  padding: 50px 0 0 12px;
                  width: 100%;
              }
              .popap_import_expor_addNew_cloase img{
                  width: 100%;
                  cursor: pointer;
              }
              .mobile_tabel{
                display:none;
              }
              .popap_import_expor_addNew_content_title{
                  font-size:30px;
                  color:#414141;
                  padding:22px 0 22px 32px;
                  background-color: #f4f4f4;
              }
              .popap_import_expor_addNew_content_footer{
                  background-color: #f4f4f4;
                  display: flex;
                  align-items:center;
                  justify-content: center;
              }
              .popap_import_expor_addNew_content_footer_button_upload{
                  background: #00B0D9;
                  color: #fff;
                  border:none;
                  outline:none;
                  padding:14px 80px;
              }
              .popap_import_expor_addNew_content_footer_button_cencel {
                  background: #CACACA;
                  color: #fff;
                  border:none;
                  outline:none;
                  padding:14px 80px;
              }
               .file-input-container {
                  position: relative;
                  width: 100%;
                  max-width: 94%;
                  margin: 20px 0;
                  display: none;
                  align-items: center;
                  padding: 10px 20px 10px 35px;
              }
              .file-input-container > 

              .file-input {
                  position: relative;
                  display: flex;
                  align-items: center;
                  width: 100%;
                  border: 1px solid #C1C1C1;
                  padding: 10px;
                  box-sizing: border-box;
              }

              .file-input input[type="file"] {
                  position: absolute;
                  opacity: 0;
                  width: 100%;
                  height: 100%;
                  cursor: pointer;
              }

              .file-input .icon {
                  margin-right: 10px;
              }

              .file-input .text {
                  flex-grow: 1;
                  color:#898989;
              }

              .file-input-label {
                  display: block;
                  color: #5F5F5F;
                  margin:10px 25px 0 0;
              }
                navbar-elem{
                    width: 100%;
                }
                .panels__panel {
                    box-sizing: border-box;
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
                    height: min-content;
                }
                #navbar {
                    display: flex;
                    flex-direction: column;
                }
                .second-panel__tab {
                    display: flex;
                    flex: 1;
                    justify-content: center;
                    height: 60px;
                    box-sizing: border-box;
                    font-size: 18px;
                    text-transform: capitalize;
                }
                 .file-input-container_2 {
                    position: relative;
                    width: 100%;
                    max-width: 94%;
                    margin: 0px 0;
                    display: flex;
                    align-items: center;
                    padding: 0 20px 10px 35px;
                }
                .file-input-container_2 > .file-input_2 {
                    position: relative;
                    display: flex;
                    align-items: center;
                    width: 100%;
                    border: 1px solid #C1C1C1;
                    padding: 10px;
                    box-sizing: border-box;
                }
                
                .file-input-label_2 {
                    display: block;
                    color: #5F5F5F;
                    margin:10px 25px 0 0;
                    max-width:150px;
                    width:100%;
                }
                .second-panel__tab > p {
                    font-size: inherit;
                }
                .second-panel .tab > span.icon {
                    font-size: 35px;
                }
                .second-panel .tab:hover > span.icon {
                    color: white;
                }
                .second-panel .tab:hover {
                    background-color: var(--blue);
                    color: white;
                }
                .second-panel .tab {
                    display: flex;
                    align-items: center;
                }
                .third-panel{
                    align-items: center;
                    row-gap: 20px;
                    box-sizing: border-box;
                    padding: 25px 10px 20px 10px;
                    background-color: var(--blue);
                    align-items: start;
                }
                
                .custom-select-container {
                    position: relative;
                    width: 200px; /* Adjust as needed */
                    margin: 20px 0;
                }

                .custom-select {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #C1C1C1;
                    appearance: none;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    background: none;
                    font-size: 16px;
                    color:#7D7D7D;
                }

                .custom-select:focus {
                    outline: none;
                }

                .custom-select-container::after {
                    content:url('./assets/icons/fixed_icons/55444 6.svg');
                    position: absolute;
                    right: 50px;
                    top: 55%;
                    transform: translateY(-50%);
                    pointer-events: none;
                }

                .clear-icon {
                    position: absolute;
                    right: 10px;
                    top: 50%;
                    transform: translateY(-50%);
                    cursor: pointer;
                    display: none; /* Hidden by default */
                }

                .clear-icon.visible {
                    display: inline;
                }

                .select_op{
                    display: flex;
                    align-items: center;
                    padding: 0 20px 10px 35px;
                }
                
                .third-panel__tab {
                    padding-left: 4px;
                    padding-right: 4px;
                    box-sizing: border-box;
                    font-weight: 100;
                    color: white;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 18px;
                    cursor: pointer;
                    overflow: hidden;
                }
                .third-panel__tab_active{
                    color: var(--yellow);
                    font-weight: 900;
                    font-family: 'Inter-Bold'
                }
                span.third-panel__tab-icon {
                    font-weight: normal;
                    color: inherit;
                    font-size: 30px;
                    margin-bottom: 6px;
                }
                .third-panel__tab-text {
                    font-weight: inherit;
                    font-family: inherit;
                    color: inherit;
                    font-size: inherit;
                    text-transform: uppercase;
                    text-align: center;
                    width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .panels {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .other-tabs{
                    display: none;
                }
                .other-tabs_active{
                    display: contents;
                }
                .third-panel__tab.more{
                    align-self: end;
                }
                .third-panel__tab.more > p.third-panel__tab-text{
                    text-align: center;
                }
                .third-panel__tab.more > p.third-panel__tab-text > span{
                    position: absolute;
                }
                .add-new-one-content-2{
                  margin-top:14px;
                  display:none;
                }
                @media (width <= 880px) {
                  .main_content_pagination{
                    display:none !important;
                  }
                  .cvalication_item > div{
                    border:1px solid #ccc;
                    margin:20px 0;
                    display:flex;
                    align-items:center;
                    padding:8px;
                  }
                  .main_content_box{
                        padding: 0px 30px 30px 30px !important; 
                  }
                  .min_tabel{
                    border-top:4px solid #00B0D9;
                    padding:12px;
                    display:flex;
                    margin-top:20px;
                  }
                  .min_tabel_left{
                    border-right:0.5px solid #808080;
                  }
                  .min_tabel_right{
                    width:100%;
                  }
                  .min_tabel_right_first{
                      display: flex;
                      justify-content: space-between;
                  }
                  .min_tabel_right >div{
                    display:flex;
                    align-items:center;
                    color: #808080;
                    font-size: 15px;
                    padding: 8px 0 8px 2px;
                    border-top: 1px solid #808080
                  }
                  .min_tabel_right_first{
                    padding: 5px 0 5px 2px !important;
                  } 
                  .min_tabel_left >div{
                    color: #808080;
                    font-size:15px;
                    padding:8px 12px 8px 2px;
                    border-top:1px solid #808080;
                  }
                  .min_tabel_right_first >div >img{
                    width:20.5px;
                    margin-right:40px;
                  }
                  .min_tabel_left > div:last-child {
                    border-bottom:1px solid #808080;
                  }
                  .min_tabel_right > div:last-child {
                    border-bottom:1px solid #808080;
                  }
                    .cvalication_item > div input{
                      border:none;
                      outline:none;
                      padding:0 0 0 5px;
                    }
                  .qualification-journal{
                    display: none !important;
                  }
                  .content_header_section{
                    grid-template-columns: 1fr 1fr;
                  }
                  .element {
                    height: 50px;
                  }  
                  .mobile_tabel{
                    display:block;
                  }
                  .main_content_select{
                    gap:25px !important;
                    flex-direction:column;
                  }
                  .select{
                    width:100% !important;
                  }
                    p.third-panel__tab-text{
                        font-size: 18px;
                    }
                    div#navbar {
                        display: none;
                        grid-template-columns: 2fr 5fr;
                        padding: 0;
                    }
                    .panels {
                        display: grid;
                        width: 100%;
                        grid-template-rows: 1fr;
                    }
                    .second-panel{
                        grid-auto-flow: row;
                    }
                    .third-panel__tab.more{
                        display: none;
                    }

                    .panels__panel{
                        grid-template-columns: none;
                    }
                    div.third-panel{
                        align-items: center;
                        column-gap: 10px;
                        row-gap: 0;
                        padding: 0;
                        padding-right: 25px;
                        padding-left: 15px;
                        box-sizing: border-box;
                        grid-template-columns: 1fr 1fr;
                        grid-template-rows: repeat(11, minmax(50px, auto));
                    }
                    .other-tabs{
                        display: contents;
                    }
                    .second-panel__tab {
                        height: 50px;
                        background-color: white;
                        color: var(--blue);
                    }
                    .tab_active {
                        background-color: var(--blue);
                        color: var(--yellow);
                    }
                    .tab_active > p {
                        color: var(--yellow);
                    }
                    div.second-panel__tab > p {
                        font-size: 18px;
                        text-align: left;
                        width: 100%;
                        padding-left: 25px;
                    }
                    .third-panel__tab > span.icon{
                        height: auto;
                        font-size: 20px;
                    }
                    p.third-panel__tab-text {
                        box-sizing: border-box;
                        padding-left: 10px;
                        width: fit-content;
                        text-align: end;
                        font-size: 18px;
                        text-transform: uppercase;
                        white-space: nowrap;
                    }
                    .third-panel__tab-icon.icon {
                        display: block;
                        font-size: 26px;
                    }
                    .third-panel__tab {
                        width: 100%;
                        overflow: hidden;
                        display: flex;
                        flex-direction: row;
                        justify-content: start;
                        /* color: white; */
                        cursor: pointer;
                    }
                    div.control-panel {
                        margin-top: 20px;
                    }
                    .third-panel__content-wrapper {
                        background-color: white;
                    }
                }
                .mobile-third-panel {
                  display: none;
                }    
                @media(max-width: 640px) {
                  .mobile-third-panel {
                    display: block;
                    margin: 20px 0;
                  }
                  .mobile-third-panel span {
                    font-size: 20px;  
                  } 
                }    
 
                 @media(width <= 561px) {
                  .content_header_section{
                    grid-template-columns: 1fr;
                  }
                  .content_header_section >div{
                    height:50px;
                  }

                  .mobile_tabel h3{
                    display:none;
                  }
                  .main_content {
                      display: flex;
                      flex-direction: column;
                      gap: 30px;
                  }  
                   .min_tabel_right_first {
                     padding: 11px 0 5px 2px !important;
                   }
                   .min_tabel_right > div {
                       height: 51px  !important;
                     }
                     .min_tabel_left > div {
                       height: 51px  !important;
                     }
                     

                 }
                @media (width <= 1560px) {
                    .third-panel__tab {
                        flex: 1;
                        text-align: center;
                    }
                }
                @media (width <= 1250px) {
                    .third-panel__tab-text {
                        font-size: 18px;
                    }
                }
                @media (width <= 1150px) {
                    .second-panel__tab {
                        font-size: 16px;
                    }
                    .third-panel__tab-text {
                        font-size: 16px;
                    }
                }
                .main_content_box{
                  padding:35px 40px;
                }
                .top{
                  background-color:red;
                  width:100%;
                  height:50px;
                }
                
                .select {
                  position: relative;
                  display: flex;
                  flex-direction:column;
                  gap:10px;
                  width: 33.3%;
                }

                .main_content{
                  margin-top:20px;
                  display:flex;
                  flex-direction:column;
                  gap:30px;
                }

                .main_content p{
                  color:#414141;
                }

                .main_content_select{
                  display:flex;
                  /*gap:60px;*/
                }

                .select_1, .select_2{
                  position: relative;
                }

                .select.active .dropdown-arrow {
                  transform: rotate(180deg);
                }
            
                .dropdown-select {
                  width: 100%;
                  padding: 12px;
                  padding-right: 40px;
                  border: 1px solid #ccc;
                  box-sizing: border-box;
                  -moz-appearance: none;
                  appearance: none;
                  color:#7D7D7D;
                  outline: none;
                  cursor:pointer;
                }
              
                .dropdown-container::after {
                  position: absolute;
                  right: 30px;
                  top: 50%;
                  transform: translateY(-50%);
                  pointer-events: none;
                  font-size: 14px;
                  color: #999;
                }
              
                .dropdown-clear {
                  position: absolute;
                  right: 15px;
                  top: 49%;
                  transform: translateY(-50%);
                  cursor: pointer;
                  font-size: 14px;
                  color: #999;
                }
                .dropdown-arrow {
                  position: absolute;
                  right: 50px;
                  top: 13px;
                  /*transform: translateY(-50%);*/
                  transform: rotate(0deg);
                  pointer-events: none;
                  font-size: 14px;
                  color: #999;
                  display:inline-block;
                }

                .dropdown-arrow.rotated {
                  transform: rotate(180deg);
                }

                .select_page{
                  display:flex;
                  gap:15px;
                  align-items:center;
                  cursor:pointer;
                }
                .select_page p{
                  font-size:14px
                }
                .select_page input{
                  width:60px;
                  height:40px;
                  border: 2px solid #ccc;
                }
                .select_page button{
                  width:60px;
                  height:40px;
                  border: 2px solid #00B0D9;
                  background: none;
                  color:#00B0D9;
                }
                
                span {
                  font-size: 14px;
                }

                .one {
                  height: 41.6px;
                }
                
                .one-text {
                  border: none;
                  resize: none;
                  height: 0px;
                  display: flex;
                  flex-direction: column;
                  outline: none;
                }
                
                .popup {
                  display: none;
                  border: 1px solid #ccc;
                  padding: 10px;
                  background-color: #f9f9f9;
                  position: absolute;
                  left: 0;
                }

                .hidden {
                  display: none;
                }

                .visible {
                  display: block;
                }
                
                .selected-item {
                  display: block;
                  margin-top: 10px;
                  font-weight: bold;
                }

                .clear-selection {
                  display: block;
                  cursor: pointer;
                  width: 21px;
                  height: 21px;
                  position: absolute;
                  right: 10px;
                  top: 10px;
                } 

                .one.is-active {
                  padding-top: 0px;
                  padding-left: 7px;
                  span {
                    font-size: 10px;
                  }
                  .one-text {
                    height: 20px;
                  } 
                }
                
                .number_of_pagination{
                  display:flex;
                  gap:10px;
                }
                
                .number_of_pagination_div{
                  border:1px solid #00B0D9;
                  width:40px;
                  height:40px;
                  display:flex;
                  justify-content:center;
                  align-items:center;
                  font-size:14px;
                  cursor:pointer;
                }
                .number_of_pagination_div_active{
                  background-color:#00B0D9;
                  color:yellow;
                }
                .first_page{
                  color:#D7D7D7;
                  border:unset;
                  border:1px solid #D7D7D7;
                  width:40px;
                  height:40px;
                  display:flex;
                  justify-content:center;
                  align-items:center;
                  font-size:14px;
                  cursor:pointer;
                }
                .next_page{
                  color:#00B0D9;
                  border:unset;
                  border:1px solid #00B0D9;
                  width:40px;
                  height:40px;
                  display:flex;
                  justify-content:center;
                  align-items:center;
                  font-size:14px;
                  cursor:pointer;
                }
                .main_content_pagination{
                  display:flex;
                  justify-content:space-between
                }
                table.qualification-journal {
                  width: 100%;
                  border-collapse: collapse;
                  margin-top: 20px;
              }
              
              table.qualification-journal caption {
                  font-size: 1.5em;
                  margin-bottom: 10px;
                  font-weight: bold;
              }
              table.qualification-journal td {
                  border: 1px solid #ddd;
                  padding: 8px;
                  text-align: left;
              }
              
              table.qualification-journal th {
                  color:#9C9C9C;
                  font-weight: 100;
                  border: 1px solid #ddd;
                  padding: 8px;
                  text-align: center;
                  font-size:14px;
              }
              
              table.qualification-journal td a {
                  text-decoration: none;
              }
              table.qualification-journal caption {
                  margin-bottom:50px;
                  text-align: start;
              }
              
              table.qualification-journal td .icon {
                  width: 20px;
                  height: 20px;
                  margin-right: 5px;
              } 
              .edit_td >a:nth-child(1){
                margin-right:20px;
                margin-left:20px;
              }
            </style>
        `;
    this.innerHTML = /*html*/ `
        ${STYLE}
            <div class="navbar-top-panel">
              <div>  
                <a href="#" class="navbar-top__link">
                <svg width="20" height="20.5" viewBox="0 0 32 33" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.9997 3.09912H23.9997C25.4663 3.09912 26.6663 4.29912 26.6663 5.76579V27.0991C26.6663 28.5658 25.4663 29.7658 23.9997 29.7658H11.9997C10.533 29.7658 9.33301 28.5658 9.33301 27.0991V24.4325H11.9997V27.0991H23.9997V5.76579H11.9997V8.43245H9.33301V5.76579C9.33301 4.29912 10.533 3.09912 11.9997 3.09912Z"/>
                  <path d="M13.4533 21.2194L15.3333 23.0994L22 16.4328L15.3333 9.76611L13.4533 11.6461L16.8933 15.0994H4V17.7661H16.8933L13.4533 21.2194Z"/>
                </svg>
                 Войти</a>
               </div>  
            </div>
            <div class="mobile-control__menu-button">
                <p>Меню</p>
                <span class="icon burger"></span>
            </div>
            <div class="mobile-third-panel">
              <span>&larr;</span>
              <span>Журнал
              </span>
              :
              <span id="clickedTabName">КВАЛИФИКАЦИИ СПЕЦИАЛЬНОСТИ</span>
            </div>
            <div id="navbar">
                <div class="panels__panel second-panel ">
                    <div class="tab second-panel__tab" id="interface_tab">
                        <p>Интерфейс</p>
                    </div>
                    <div class="tab second-panel__tab" id="social_tab">
                        <p>Соц. сети</p>
                    </div>
                    <div class = "tab second-panel__tab tab_active" id="journals_tab" >
                        <p>Журналы</p>
                    </div>
                    <div class="tab second-panel__tab" id="import_tab">
                        <p>Импорт</p>
                    </div>
                    <div class="tab second-panel__tab" id="export_tab">
                        <p>Экспорт</p>
                    </div>

                    <div class="tab second-panel__tab" id="users_tab">
                        <p>Пользователи</p>
                    </div>
                    <div class="tab second-panel__tab" id="emails_tab">
                        <p>Email ящики</p>
                    </div>
                    <div class="tab second-panel__tab">
                        <p>Ключи.Пароли</p>
                    </div>
                    <div class="tab second-panel__tab">
                        <p>Разное</p>
                    </div>
                </div>
                <div class="third-panel journals panels__panel">
                    ${(() => {
                      let markup = "";
                      for (const tab of this.THRID_PANEL_TABS.slice(0, 8)) {
                        if (tab[0] == "вакансии объед") {
                          markup += this.THIRD_PANEL_TAB_TEMPLATE(
                            tab[0],
                            tab[1],
                            { tabNameClasses: "no-white" }
                          );
                          continue;
                        }
                        markup += this.THIRD_PANEL_TAB_TEMPLATE(tab[0], tab[1]);
                      }
                      return markup;
                    })()}
                    <div class="third-panel__tab more" id="toggleButton">
                        <p class="third-panel__tab-text">
                            <span style="width: 100%; text-align: center; position: static;">Все 21</span>
                            <br> журнала <span class="icon reversed" style="padding-left: 5px;"></span></p>
                    </div>
                    <div class="other-tabs">
                        ${(() => {
                          let markup = "";
                          for (const [
                            index,
                            tab,
                          ] of this.THRID_PANEL_TABS.slice(8).entries()) {
                            if (index == 8) {
                              markup += `<div class="third-panel__tab more"></div>`;
                            }
                            markup += this.THIRD_PANEL_TAB_TEMPLATE(
                              tab[0],
                              tab[1]
                            );
                          }
                          return markup;
                        })()}
                    </div>
                </div>
            </div>
            <div class="main_content_box">
                <div class="popap_import_expor_addNew" id="popap_import_expor_addNew">
                  <div class='popap_import_expor_addNew_parrent'>
                <div class="popap_import_expor_addNew_shadow"></div>
                <div class="popap_import_expor_addNew_content">
                    <div class="popap_import_expor_addNew_content_main">
                        <div class="popap_import_expor_addNew_content_title" id="popap_import_expor_addNew_content_title"></div>
                        <div class="file-input-container">
                                <label for="fileInput" class="file-input-label"
                                    id="fileLabel">Название <br/>файла</label>
                                <div class="file-input">
                                    <span class="icon"><img src="./assets/icons/fixed_icons/Rectangle 11.svg"></span>
                                    <span class="text">Выберите файл</span>
                                    <input type="file" id="fileInput">
                                </div>
                          </div>
                            <div class="add-new-one-content-2">
                                <div class="file-input-container_2">
                                    <label for="textInput" class="file-input-label_2">Название<br/>квалификации</label>
                                    <input type="text" class="file-input_2">
                                </div>
                                <div class="file-input-container_2">
                                    <label for="textInput" class="file-input-label_2">Специальность<br/> для квалификации</label>
                                    <input type="text" class="file-input_2">
                                </div>
                                <div class="file-input-container_2">
                                    <label for="textInput" class="file-input-label_2">Направление</label>
                                    <input type="text" class="file-input_2">
                                </div>
                                 <div class="select_op">
                                  <label for="textInput"
                                      class="file-input-label_2">ССУЗ или ВУЗ</label>
                                  <div class="custom-select-container">
                                      <select class="custom-select"
                                      id="customSelect"
                                      onChange="onSelect(event)" >
                                          <option value="ССУЗ">ССУЗ</option>
                                          <option value="ВУЗ">ВУЗ</option>
                                      </select>
                                      <img class="clear-icon" id="clearIcon" onClick="clearValue()" src='./assets/icons/fixed_icons/healthicons_no.svg' >
                                  </div>
                              </div>
                            </div>
                    </div>
                    <div class="popap_import_expor_addNew_content_footer">
                        <button class="popap_import_expor_addNew_content_footer_button_upload">Загрузить</button>
                        <button class="popap_import_expor_addNew_content_footer_button_cencel">Отмена</button>
                    </div>
                </div>
                <div class="popap_import_expor_addNew_cloase">
                    <div class='popap_import_expor_addNew_cloase_img' onclick="cloasePopap()">
                        <img src="./assets/icons/fixed_icons/Component4(1).svg" />
                    </div>
                </div>
            </div>
        </div>
        <div class="content_header_section">
            <div class="date-picker-container element"
                onclick="toggleDatePickerStart()">
                <div class="date-picker-text">
                    <img src="./assets/icons/fixed_icons/today_5018 2.svg" />
                    DATA OT
                </div>
                <input type="date" id="date-picker-start"
                    class="date-picker-input">
            </div>
            <div class="date-picker-container element" onclick="toggleDatePickerEnd()">
                <div class="date-picker-text">
                    <img src="./assets/icons/fixed_icons/today_5018 2.svg" />
                    DATA ДО
                </div>
                <input type="date" id="date-picker-end"
                    class="date-picker-input">
            </div>
            <div class="add-new-one element" onclick="openAddNewOnePopap()">
                + ADD A NEW ONE
            </div>
            <div class="in-total element">
                <img src='./assets/icons/fixed_icons/Vector_12.svg' />
                DESELECT: <span>298732</span>
            </div>
            <div class="import_export element" onclick="openImportPopap()">
                <img src='./assets/icons/fixed_icons/Group36_1 .svg'  />
                IMPORT
            </div>
            <div class="import_export element" onclick="openExportPopap()">
                <img src='./assets/icons/fixed_icons/Group36.svg' />
                EXPORT
            </div>
        </div>
                <div class="main_content">
                      <div class="main_content_select">
                        <div class="select">
                          <p>Тип учебного заведения</p>
                          <div class="select_1">
                            <div class="dropdown-select one">
                              <span>Выберите регион</span>
                              <textarea class="one-text"></textarea>
                              <span class="selected-item hidden"></span>
                            </div>
                            <div class="dropdown-arrow">&#9660;</div>
                            <div class="clear-selection hidden">&#x2715;</div>
                            <div class="popup hidden">
                              <p>Китая</p>
                              <p>Россия</p>
                              <p>Беларусь</p>
                            </div>
                          
                          </div>






                          <!--<div class="select_1" onclick="toggleDropdown(this)">
                            <div class="dropdown-select selectBox" onclick="showCheckboxes()">
                              <select>
                                <option>Тип учебного заведения</option>
                              </select>
                              <div class="overSelect"></div>
                            </div>
                            <div id="checkboxes">
                            <label for="one">По всем
                              <input type="checkbox" id="one" class="chekbox_input" /></label>
                            <label for="two">Школы, гимназии 
                              <input type="checkbox" id="two" class="chekbox_input"/></label>
                            <label for="three">Среднее-специальное учебные заведения
                              <input type="checkbox" id="three" class="chekbox_input"/></label>
                            <label for="four">Высшие-специальные учебные заведения
                              <input type="checkbox" id="four" class="chekbox_input"/></label>  
                            </div>
                          </div>-->



                          


                          <!--<div class="select_1" onclick="toggleDropdown(this)">
                            <div name="educational_establishments" class="dropdown-select" id="educational" onchange="getValue(this.value);">
                              <span style="font-size: 13px;">Поиск</span>
                            </div>
                            <select name="educational_establishments" class="dropdown-select" id="educational" onchange="getValue(this.value);">
                              <option value="По всем">По всем</option>
                              <option value="Школы, гимназии">Школы, гимназии</option>
                              <option value="Среднее-специальное учебные заведения">Среднее-специальное учебные заведения</option>
                              <option value="Высшие-специальные учебные заведения">Высшие-специальные учебные заведения</option>
                            </select>
                            <div class="dropdown-arrow">&#9660;</div>
                            <div class="dropdown-clear" type="button" id="clearBtn" data-index="-1">&#x2715;</div>
                          </div>-->
                        </div>

                        <div class="select">
                          <p>Регион учебных заведений</p>
                          <div class="select_2" onclick="toggleDropdown(this)">
                            <select name="educational_establishments" class="dropdown-select" id="educational">
                              <option value="Нижний Новгород">Нижний Новгород</option>
                              <option value="Арзамас" >Арзамас</option>
                              <option value="Балахна">Балахна</option>
                              <option value="Богородск">Богородск</option>
                              <option value="Бор">Бор</option>
                              <option value="Ветлуга">Ветлуга</option>
                              <option value="Володарск">Володарск</option>
                              <option value="Ворсма">Ворсма</option>
                              <option value="Выкса">Выкса</option>
                              <option value="Горбатов">Горбатов</option>
                              <option value="Городец">Городец</option>
                              <option value="Дзержинск">Дзержинск</option>
                              <option value="Заволжье">Заволжье</option>
                              <option value="Княгинино">Княгинино</option>
                              <option value="Кстово">Кстово</option>
                              <option value="Кулебаки">Кулебаки</option>
                              <option value="Лукоянов">Лукоянов</option>
                              <option value="Лысково">Лысково</option>
                              <option value="Навашино">Навашино</option>
                              <option value="Павлово">Павлово</option>
                              <option value="Первомайск">Первомайск</option>  
                              <option value="Перевоз">Перевоз</option>
                              <option value="Саров">Саров</option>
                              <option value="Семенов">Семенов</option>
                              <option value="Сергач">Сергач</option>
                              <option value="Урень">Урень</option>
                              <option value="Чкаловск">Чкаловск</option>
                              <option value="Шахунья">Шахунья</option>
                              <option value="Алтайский край">Алтайский край</option>
                              <option value="Амурская область">Амурская область</option>  
                              <option value="Архангельская область">Архангельская область</option>
                              <option value="Астраханская область">Астраханская область</option>
                              <option value="Белгородская область">Белгородская область</option>
                              <option value="Брянская область">Брянская область</option>
                              <option value="Владимирская область">Владимирская область</option>  
                              <option value="Волгоградская область">Волгоградская область</option>
                              <option value="Вологодская область">Вологодская область</option>
                              <option value="Воронежская область">Воронежская область</option>
                              <option value="Донецкая Народная Республика">Донецкая Народная Республика</option>
                              <option value="Еврейская автономная область">Еврейская автономная область</option>
                              <option value="Забайкальский край">Забайкальский край</option>
                              <option value="Запорожская область">Запорожская область</option>
                              <option value="Ивановская область">Ивановская область</option>
                              <option value="Иркутская область">Иркутская область</option> 
                              <option value="Кабардино-Балкарская Республика">Кабардино-Балкарская Республика</option>
                              <option value="Калининградская область">Калининградская область</option>
                              <option value="Калужская область">Калужская область</option>
                              <option value="Камчатский край">Камчатский край</option>
                              <option value="Карачаево-Черкесская Республика">Карачаево-Черкесская Республика</option>  
                              <option value="Кемеровская область">Кемеровская область</option>
                              <option value="Кировская область">Кировская область</option>
                              <option value="Костромская область">Костромская область</option>
                              <option value="Краснодарский край">Краснодарский край</option>
                              <option value="Красноярский край">Красноярский край</option>
                              <option value="Крым">Крым</option>
                              <option value="Курганская область">Курганская область</option>
                              <option value="Курская область">Курская область</option>
                              <option value="Ленинградская область">Ленинградская область</option> 
                              <option value="Липецкая область">Липецкая область</option>
                              <option value="Луганская Народная Республика">Луганская Народная Республика</option>
                              <option value="Магаданская область">Магаданская область</option>
                              <option value="Москва">Москва</option>
                              <option value="Московская область">Московская область</option>
                              <option value="Мурманская область">Мурманская область</option>
                              <option value="Ненецкий автономный округ">Ненецкий автономный округ</option>
                              <option value="Нижегородская область">Нижегородская область</option>                              
                              <option value="Новгородская область">Новгородская область</option>
                              <option value="Новосибирская область">Новосибирская область</option>
                              <option value="Омская область">Омская область</option>
                              <option value="Оренбургская область">Оренбургская область</option>
                              <option value="Орловская область">Орловская область</option>
                              <option value="Пензенская область">Пензенская область</option>
                              <option value="Пермский край">Пермский край</option>
                              <option value="Приморский край">Приморский край</option>    
                              <option value="Псковская область">Псковская область</option>
                              <option value="Республика Адыгея">Республика Адыгея</option>
                              <option value="Республика Алтай">Республика Алтай</option>
                              <option value="Республика Башкортостан">Республика Башкортостан</option>
                              <option value="Республика Бурятия">Республика Бурятия</option>
                              <option value="Республика Дагестан">Республика Дагестан</option>
                              <option value="Республика Ингушетия">Республика Ингушетия</option>
                              <option value="Республика Калмыкия">Республика Калмыкия</option>
                              <option value="Республика Карелия">Республика Карелия</option>
                              <option value="Республика Коми">Республика Коми</option>
                              <option value="Республика Марий Эл">Республика Марий Эл</option>
                              <option value="Республика Мордовия">Республика Мордовия</option>
                              <option value="Республика Саха (Якутия)">Республика Саха (Якутия)</option>
                              <option value="Республика Северная Осетия — Алания">Республика Северная Осетия — Алания</option>
                              <option value="Республика Татарстан">Республика Татарстан</option>    
                              <option value="Республика Тыва">Республика Тыва</option>
                              <option value="Республика Хакасия">Республика Хакасия</option>
                              <option value="Ростовская область">Ростовская область</option>
                              <option value="Рязанская область">Рязанская область</option>
                              <option value="Самарская область">Самарская область</option>
                              <option value="Санкт-Петербург">Санкт-Петербург</option>
                              <option value="Саратовская область">Саратовская область</option>
                              <option value="Сахалинская область">Сахалинская область</option>
                              <option value="Свердловская область">Свердловская область</option>
                              <option value="Севастополь">Севастополь</option>
                              <option value="Смоленская область">Смоленская область</option>
                              <option value="Ставропольский край">Ставропольский край</option>
                              <option value="Тамбовская область">Тамбовская область</option>
                              <option value="Тверская область">Тверская область</option>
                              <option value="Томская область">Томская область</option>    
                              <option value="Тульская область">Тульская область</option>
                              <option value="Тюменская область">Тюменская область</option>
                              <option value="Удмуртская Республика">Удмуртская Республика</option>
                              <option value="Ульяновская область">Ульяновская область</option>
                              <option value="Хабаровский край">Хабаровский край</option>
                              <option value="Ханты-Мансийский автономный округ — Югра">Ханты-Мансийский автономный округ — Югра</option>
                              <option value="Херсонская область">Херсонская область</option>
                              <option value="Челябинская область">Челябинская область</option>   
                              <option value="Чеченская Республика">Чеченская Республика</option>
                              <option value="Чувашская Республика">Чувашская Республика</option>
                              <option value="Чукотский автономный округ">Чукотский автономный округ</option>
                              <option value="Ямало-Ненецкий автономный округ">Ямало-Ненецкий автономный округ</option>
                              <option value="Ярославская область">Ярославская область</option>
                            </select>
                            <div class="dropdown-clear" onclick="clearSelection()">&#x2715;</div>
                            <div class="dropdown-arrow arrow">&#9660;</div>
                          </div>
                        </div>
                      </div>
                      <div class="main_content_pagination">
                        <div class="select_page">
                          <p>Укажите страницу</p>
                          <input type="text">
                          <button> Go </button>
                        </div>
                        <div class="number_of_pagination" id="pag">
                          ${(() => {
                            let markup = "";
                            for (const [index,tab] of this.NUMBER_OF_PAGINATION.entries()) {
                            const size = String(window.innerWidth)
                              if (index == 2) {
                                console.log('size[0]', size[0])
                                const length = size.length > 3 ? size[0] + size[1] : size[0]
                                for (let i = 1; i <= length; i++) {
                                  markup += this.NUMBER_OF_PAGINATION_TEMPLATE(i, i);
                                }
                              } else {
                                markup += this.NUMBER_OF_PAGINATION_TEMPLATE(tab, index);
                              }
                            }
                            return markup;
                          })()}
                        </div>
                      </div>
                      <div class="mobile_tabel">
                          <h3>Журнал квалификаций</h3>
                          <div class="cvalication" >
                            <div class="cvalication_item">
                               <div>
                                      <img src="assets/icons/fixed_icons/Search.svg" alt="">
                                      <input type="text" placeholder="Название квалификации"  />  
                               </div>
                                 <div>
                                      <img src="assets/icons/fixed_icons/Search.svg" alt="">
                                      <input type="text" placeholder="ID"  />  
                               </div>
                                 <div>
                                      <img src="assets/icons/fixed_icons/Search.svg" alt="">
                                      <input type="text" placeholder="Специальность"  />  
                               </div>
                                 <div>
                                      <img src="assets/icons/fixed_icons/Search.svg" alt="">
                                      <input type="text" placeholder="Направление"  />  
                               </div>
                                 <div>
                                      <img src="assets/icons/fixed_icons/Search.svg" alt="">
                                      <input type="text" placeholder="Кому"  />  
                               </div>
                            </div>
                          </div>
                          <div class="min_tabel">
                            <div class="min_tabel_left">
                              <div>№</div>
                              <div>ID</div>
                              <div>Квалификация</div>
                              <div>Специальность</div>
                              <div>Направление</div>
                              <div>Кому</div>
                            </div>
                            <div class="min_tabel_right">
                              <div class="min_tabel_right_first">
                                <p>1</p>
                                <div>
                                  <img src="assets/icons/fixed_icons/Редактировать.svg" alt="Edit" class="icon">
                                  <img src="assets/icons/fixed_icons/Удалить.svg" alt="Delete" class="icon">
                                </div>
                              </div>
                              <div>43</div>
                              <div>Бакалавр прикладной математики и информатики</div>
                              <div>Прикладная математика и информатика</div>
                              <div>ФИЗИКО-МАТЕМАТИЧЕСКИЕ НАУКИ</div>
                              <div>ВУЗ</div>
                            </div>
                          </div>
                          <div class="min_tabel">
                            <div class="min_tabel_left">
                              <div>№</div>
                              <div>ID</div>
                              <div>Квалификация</div>
                              <div>Специальность</div>
                              <div>Направление</div>
                              <div>Кому</div>
                            </div>
                            <div class="min_tabel_right">
                              <div class="min_tabel_right_first">
                                <p>2</p>
                                <div>
                                  <img src="assets/icons/fixed_icons/Редактировать.svg" alt="Edit" class="icon">
                                  <img src="assets/icons/fixed_icons/Удалить.svg" alt="Delete" class="icon">
                                </div>
                              </div>
                              <div>23</div>
                              <div>Магистр прикладной математики и информатики</div>
                              <div>Прикладная математика и информатика</div>
                              <div>ФИЗИКО-МАТЕМАТИЧЕСКИЕ НАУКИ</div>
                              <div>ВУЗ</div>
                            </div>
                          </div>
                           <div class="min_tabel">
                            <div class="min_tabel_left">
                              <div>№</div>
                              <div>ID</div>
                              <div>Квалификация</div>
                              <div>Специальность</div>
                              <div>Направление</div>
                              <div>Кому</div>
                            </div>
                            <div class="min_tabel_right">
                              <div class="min_tabel_right_first">
                                <p>3</p>
                                <div>
                                  <img src="assets/icons/fixed_icons/Редактировать.svg" alt="Edit" class="icon">
                                  <img src="assets/icons/fixed_icons/Удалить.svg" alt="Delete" class="icon">
                                </div>
                              </div>
                              <div>6</div>
                              <div>Менеджер</div>
                              <div>Сестринское дело</div>
                              <div>ЗДРАВООХРАНЕНИЕ</div>
                              <div>ССУЗ</div>
                            </div>
                          </div>
                           <div class="min_tabel">
                            <div class="min_tabel_left">
                              <div>№</div>
                              <div>ID</div>
                              <div>Квалификация</div>
                              <div>Специальность</div>
                              <div>Направление</div>
                              <div>Кому</div>
                            </div>
                            <div class="min_tabel_right">
                              <div class="min_tabel_right_first">
                                <p>4</p>
                                <div>
                                  <img src="assets/icons/fixed_icons/Редактировать.svg" alt="Edit" class="icon">
                                  <img src="assets/icons/fixed_icons/Удалить.svg" alt="Delete" class="icon">
                                </div>
                              </div>
                              <div>54</div>
                              <div>Медицинская сестра</div>
                              <div>Сестринское дело</div>
                              <div>ЗДРАВООХРАНЕНИЕ</div>
                              <div>ССУЗ</div>
                            </div>
                          </div>
                           <div class="min_tabel">
                            <div class="min_tabel_left">
                              <div>№</div>
                              <div>ID</div>
                              <div>Квалификация</div>
                              <div>Специальность</div>
                              <div>Направление</div>
                              <div>Кому</div>
                            </div>
                            <div class="min_tabel_right">
                              <div class="min_tabel_right_first">
                                <p>5</p>
                                <div>
                                  <img src="assets/icons/fixed_icons/Редактировать.svg" alt="Edit" class="icon">
                                  <img src="assets/icons/fixed_icons/Удалить.svg" alt="Delete" class="icon">
                                </div>
                              </div>
                              <div>58</div>
                              <div>Медицинская сестра с углубленной подготовкой</div>
                              <div>Сестринское дело</div>
                              <div>ЗДРАВООХРАНЕНИЕ</div>
                              <div>ССУЗ</div>
                            </div>
                          </div>
                      </div>
                      <div class="main_content_table">
                          <table class="qualification-journal">
                            <caption>Журнал квалификаций</caption>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>№</th>
                                    <th>КВАЛИФИКАЦИЯ</th>
                                    <th>СПЕЦИАЛЬНОСТЬ</th>
                                    <th>НАПРАВЛЕНИЕ</th>
                                    <th>КОМУ</th>
                                    <th>РЕДАКТИРОВАТЬ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src="assets/icons/fixed_icons/Search.svg" alt=""></td>
                                    <td></td>
                                    <td>
                                      <img src="assets/icons/fixed_icons/Search.svg" alt="">
                                      <input type="text" />  
                                    </td>
                                    <td>
                                      <img src="assets/icons/fixed_icons/Search.svg" alt="">
                                      <input type="text" />  
                                    </td>
                                    <td>
                                      <img src="assets/icons/fixed_icons/Search.svg" alt="">
                                      <input type="text" />  
                                    </td>
                                    <td><img src="assets/icons/fixed_icons/Search.svg" alt=""></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>43</td>
                                    <td>1</td>
                                    <td>Бакалавр прикладной математики и информатики</td>
                                    <td>Прикладная математика и информатика</td>
                                    <td>ФИЗИКО-МАТЕМАТИЧЕСКИЕ НАУКИ</td>
                                    <td>ВУЗ</td>
                                    <td class="edit_td">
                                        <a href="#"><img src="assets/icons/fixed_icons/Редактировать.svg" alt="Edit" class="icon"></a>
                                        <a href="#"><img src="assets/icons/fixed_icons/Удалить.svg" alt="Delete" class="icon"></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>23</td>
                                    <td>2</td>
                                    <td>Магистр прикладной математики и информатики</td>
                                    <td>Прикладная математика и информатика</td>
                                    <td>ФИЗИКО-МАТЕМАТИЧЕСКИЕ НАУКИ</td>
                                    <td>ВУЗ</td>
                                    <td class="edit_td">
                                    <a href="#"><img src="assets/icons/fixed_icons/Редактировать.svg" alt="Edit" class="icon"></a>
                                    <a href="#"><img src="assets/icons/fixed_icons/Удалить.svg" alt="Delete" class="icon"></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>3</td>
                                    <td>Менеджер</td>
                                    <td>Сестринское дело</td>
                                    <td>ЗДРАВООХРАНЕНИЕ</td>
                                    <td>ССУЗ</td>
                                    <td class="edit_td">
                                    <a href="#"><img src="assets/icons/fixed_icons/Редактировать.svg" alt="Edit" class="icon"></a>
                                    <a href="#"><img src="assets/icons/fixed_icons/Удалить.svg" alt="Delete" class="icon"></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>54</td>
                                    <td>4</td>
                                    <td>Медицинская сестра</td>
                                    <td>Сестринское дело</td>
                                    <td>ЗДРАВООХРАНЕНИЕ</td>
                                    <td>ССУЗ</td>
                                    <td class="edit_td">
                                    <a href="#"><img src="assets/icons/fixed_icons/Редактировать.svg" alt="Edit" class="icon"></a>
                                    <a href="#"><img src="assets/icons/fixed_icons/Удалить.svg" alt="Delete" class="icon"></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>86</td>
                                    <td>5</td>
                                    <td>Медицинская сестра с углубленной подготовкой</td>
                                    <td>Сестринское дело</td>
                                    <td>ЗДРАВООХРАНЕНИЕ</td>
                                    <td>ССУЗ</td>
                                    <td class="edit_td">
                                    <a href="#"><img src="assets/icons/fixed_icons/Редактировать.svg" alt="Edit" class="icon"></a>
                                    <a href="#"><img src="assets/icons/fixed_icons/Удалить.svg" alt="Delete" class="icon"></a>
                                    </td>
                                </tr>
                            </tbody>
                      </table>
                      </div>
                      <div class="main_content_pagination">
                        <div class="select_page">
                          <p>Укажите страницу</p>
                          <input type="text">
                          <button> Go </button>
                        </div>
                        <div class="number_of_pagination" id="pag">
                          ${(() => {
                            let markup = "";
                            const size = String(window.innerWidth)
                            for (const [index,tab] of this.NUMBER_OF_PAGINATION.entries()) {
                             if (index == 2) {
                               console.log('size[0]', size[0])
                               const length = size.length > 3 ? size[0] + size[1] : size[0]
                               for (let i = 1; i <= length; i++) {
                                 markup += this.NUMBER_OF_PAGINATION_TEMPLATE(i, i);
                               }
                             } else {
                               markup += this.NUMBER_OF_PAGINATION_TEMPLATE(tab, index);
                             }
                            }
                            return markup;
                          })()}
                        </div>
                      </div>
                </div>
            </div>
        `;
  }

  setup() {
    const thirdPanel = this.querySelector(".third-panel");
    this.querySelectorAll(".second-panel__tab").forEach((el) => {
      this.querySelectorAll(".third-panel__tab").forEach((el) => {
        el.classList.remove("third-panel__tab_active");
        if (el.innerHTML.includes("КВАЛИФИКАЦИИ СПЕЦИАЛЬНОСТИ")) {
          el.classList.add("third-panel__tab_active");
        }
      });
      el.addEventListener("click", () => {
        if (el.getAttribute("id") == "journals_tab") {
          thirdPanel.setAttribute("style", "display:grid;");
          this.querySelectorAll(".third-panel__tab").forEach((el) => {
            el.classList.remove("third-panel__tab_active");
            if (el.innerHTML.includes("КВАЛИФИКАЦИИ СПЕЦИАЛЬНОСТИ")) {
              el.classList.add("third-panel__tab_active");
            }
          });
        } else {
          thirdPanel.setAttribute("style", "display:none;");
        }
        el.classList.add("tab_active");
      });
      document.addEventListener("click", (event) => {
        const isAnotherTabClicked = Array.from(
          document.querySelectorAll(".second-panel__tab")
        ).filter((el) => {
          return el.contains(event.target);
        }).length;

        if (!el.contains(event.target) && isAnotherTabClicked) {
          el.classList.remove("tab_active");
        }
      });
    });

    document.querySelectorAll(".number_of_pagination_div").forEach(el => {
      el.addEventListener("click", () => {
        this.querySelectorAll(".number_of_pagination_div").forEach(elm => {
          elm.classList.remove("number_of_pagination_div_active")
        })
        el.classList.add("number_of_pagination_div_active")
      })
    })

    const moreTab = this.querySelector(".third-panel__tab.more");
    moreTab.onclick = () => {
      const otherTabs = this.querySelector(".other-tabs");
      if (otherTabs.classList.contains("other-tabs_active")) {
        otherTabs.classList.remove("other-tabs_active");
        moreTab
          .querySelector("p")
          .querySelector("span.icon")
          .classList.add("reversed");
      } else {
        otherTabs.classList.add("other-tabs_active");
        moreTab
          .querySelector("p")
          .querySelector("span.icon")
          .classList.remove("reversed");
      }
    };




    this.querySelectorAll(".third-panel__tab:not(.more)").forEach(
      (el, index) => {
        el.onclick = (event) => {
          this.querySelectorAll(".third-panel__tab").forEach((el) => {
            el.classList.remove("third-panel__tab_active");
          });
          el.classList.add("third-panel__tab_active");
        };
      }
    );  


    document.querySelector(".icon.burger").onclick = () => {
      const menu = document.querySelector("#navbar");
      if (menu.classList.contains("mobile-menu-wrapper_active")) {
        menu.classList.remove("mobile-menu-wrapper_active");
      } else {
        menu.classList.add("mobile-menu-wrapper_active");
      }
    };
    window.addEventListener("resize", () => {
      const menu = document.querySelector("#navbar");
      if (window.innerWidth <= 640) {
        menu.classList.remove("mobile-menu-wrapper_active");
      } else if (window.innerWidth >= 880) {
        menu.classList.add("mobile-menu-wrapper_active");
      }
    });
  }

}

let arrow=document.querySelectorAll('.dropdown-arrow');
	for(i=0; i<arrow.length; i++){
		  let thisArrow=arrow[i];
		  arrow[i].addEventListener('click', function(){
		    thisArrow.classList.toggle('active');
	  });
  }  


function toggleDropdown(element) {
  element.parentElement.classList.toggle('active');
}


function toggleDatePickerStart() {
  const datePicker = document.getElementById('date-picker-start')
  datePicker.showPicker();
}

function toggleDatePickerEnd() {
  const datePicker = document.getElementById('date-picker-end')
  datePicker.showPicker();
}

function cloasePopap() {
  const popapImportExporAddNew = document.querySelector('#popap_import_expor_addNew');
  const addNewOneContent = document.querySelector('.add-new-one-content-2');
  const fileInputContainer = document.querySelector('.file-input-container');

  addNewOneContent.style.display = "none"
  fileInputContainer.style.display = "none"
  popapImportExporAddNew.style.display = "none"

}

function openAddNewOnePopap() {
  const popapImportExporAddNewContentTitle = document.querySelector('#popap_import_expor_addNew_content_title');
  const popapImportExporAddNew = document.querySelector('#popap_import_expor_addNew');
  const addNewOneContent = document.querySelector('.add-new-one-content-2');
  popapImportExporAddNew.style.display = "flex"
  addNewOneContent.style.display = "block"
  popapImportExporAddNewContentTitle.innerText = "Добавить квалификацию"
}

function openImportPopap() {
  const popapImportExporAddNew = document.querySelector('#popap_import_expor_addNew');
  const popapImportExporAddNewContentTitle = document.querySelector('#popap_import_expor_addNew_content_title');
  const fileInputContainer = document.querySelector('.file-input-container');
  popapImportExporAddNew.style.display = "flex"
  fileInputContainer.style.display = "flex"
  popapImportExporAddNewContentTitle.innerText = "Импорт квалификаций"
}

function openExportPopap() {
  const popapImportExporAddNew = document.querySelector('#popap_import_expor_addNew');
  const popapImportExporAddNewContentTitle = document.querySelector('#popap_import_expor_addNew_content_title');
  const fileInputContainer = document.querySelector('.file-input-container');
  popapImportExporAddNew.style.display = "flex"
  fileInputContainer.style.display = "flex"
  popapImportExporAddNewContentTitle.innerText = "Экспорт квалификаций"
}

function onSelect(event) {
  if (event.target.value) {
    clearIcon.classList.add('visible');
  } else {
    clearIcon.classList.remove('visible');
  }
};

function clearValue() {
  customSelect.value = '';
  clearIcon.classList.remove('visible');
};


function toggleDropdown(element) {
  element.parentElement.classList.toggle('active');
}

function getValue(value) {
  alert(value);
}


document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggleButton');
  const items = document.querySelectorAll('.third-panel__tab-text');

  // Initial setup for visible items
  checkOverflow(items);

  toggleButton.addEventListener('click', function() {
      //items.forEach(item => item.classList.toggle('hidden'));
      checkOverflow(items);
  });

  function checkOverflow(items) {
      items.forEach(item => {
          const clone = document.createElement('div');
          clone.style.position = 'absolute';
          clone.style.visibility = 'hidden';
          clone.style.whiteSpace = 'nowrap';
          clone.style.font = window.getComputedStyle(item).font;
          clone.textContent = item.textContent;

          document.body.appendChild(clone);

          if (clone.offsetWidth > item.clientWidth) {
              item.setAttribute('title', item.textContent);
          } else {
              item.removeAttribute('title');
          }

          document.body.removeChild(clone);
      });
  }
});





customElements.define("navbar-elem", Navbar);