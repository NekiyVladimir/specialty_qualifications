
let page2 = 'Квалификации Специальности'
let page = 'Квалификации Специальности'

const THRID_PANEL_TABS = [
  ["Объявления", "", "объявления", "id1"],
  ["Вакансии", "", "вакансии", "id2"],
  ["Поиск", "", "поиск", "id3"],
  ["Соискатели", "", "соискатели", "id4"],
  ["Отклики", "", "отклики", "id5"],
  ["ФИО", "", "фио", "id6"],
  ["Адреса", "", "адреса", "id7"],
  ["Компании", "", "компании", "id8"],
  ["Учебные заведения", "", "учебные заведения", "id9"],
  ["Вакансии объединённые", "", "вакансии объединённые", "id10"],
  ["Сокращённые юридические формы", "", "сокращенные юридические формы", "id19", true],
  ["Альтернативные учебные⠀заведения", "", "Альтернативные учебные заведения", "id11"],
  ["Филиалы учебных заведений", "", "филиалы", "id12"],
  // ["Квалификации", "", "квалификации"], // Этот элемент закомментирован
  ["Квалификации Специальности", "", "Квалификации Специальности", "id13"],
  ["Телефонные коды", "", "телефонные коды", "id14"],
  ["Администраторы", "", "администраторы", "id15"],
  ["email рассылка", "", "email рассылка", "id16"],
  ["Как было как надо", "", "КАК БЫЛО КАК НАДО", "id17"],
  ["Префиксы счетов", "", "префиксы счетов", "id18"],

  ["Банки", "", "банки", "id20"],
  ["Рубрикатор", "", "рубрикатор", "id21"],
];


class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
    this.setup();
  }







  THIRD_PANEL_TAB_TEMPLATE = (
    tabName,
    icon,
    content,
    { classes = "", id = "", tabNameClasses = "" } = {}
  ) => {
    return /*html*/ `
        <div class="third-panel__tab tab${id}" ${id ? `id="${id.trim()}"` : ""}>
            ${icon
        ? `<span class="third-panel__tab-icon icon ads-icon in-panel ${classes}">${icon}</span>`
        : ""
      }
            <p class="third-panel__tab-text ${tabNameClasses}">${tabName}</p>
        </div>
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
                .navbar-top-panel{
                    background-color: #414f51;
                    color: white;
                    height: 40px;
                    padding: 0 20px;
                    display:flex;
                    justify-content: flex-end;
                    align-items: center;
                    
                    a{
                        color: white;
                        text-decoration: none;
                        cursor: pointer;
                        display:flex;
                        align-items: center;
                    }
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
                
                .third-panel__tab {
                    padding-left: 15px;
                    padding-right: 15px;
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
                    white-space: wrap;
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
                @media (width <= 880px) {
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

	              /* main_content*/

		            .main_content{
                  margin-top:20px;
                  display:flex;
                  flex-direction:column;
                  gap:30px;
                }

                .main_content p{
                  color:#414141;
                }
		            .main_content_box{
                  padding:35px 25px;
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
		            .popap_import_expor_addNew_content_main {
    		          height: 100%;
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
		            .popap_import_expor_addNew_content_footer {
    		          padding: 32px;
		            }
		            .popap_import_expor_addNew_content_footer >button {
    		          margin: 7px;
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
		            .file-input-container_2 {
    		          position: relative;
    		          width: 100%;
    		          max-width: 94%;
    		          margin: 0px 0;
    		          display: flex;
    		          align-items: center;
    		          padding: 0 20px 10px 35px;
		            }
		            .file-input-label_2 {
    		          display: block;
    		          color: #5F5F5F;
    		          margin: 10px 25px 0 0;
    		          max-width: 150px;
    		          width: 100%;
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
		            .select_op{
                    display: flex;
                    align-items: center;
                    padding: 0 20px 10px 35px;
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
		            .content_header_section{
                  display: grid;
                  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr) );
                  font-size: 18px;
                  white-space: nowrap; 
            	  }
		            .date-picker-container{
                  position: relative;
                  border:1px solid #9C9C9C;
                  height: 50px;
              	}
                .date-picker-start, .date-picker-end {
                  color: var(--green);
                  margin-left: 6.5px;
                  font-size: 18px;
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

                [data-value] {
                  position: relative; /* Относительное позиционирование */ 
                }
                [data-value]:hover::before {
                  z-index: 2;
                  content: "";
                  position: absolute;
                  transform: translateY(20px);
                  border: 20px solid transparent;
                  border-bottom: 20px solid #D3D3D3;
                  }
                [data-value]::after {
                  content: attr(data-value); /* Выводим текст */
                  position: absolute; /* Абсолютное позиционирование */
                  background: #D3D3D3; /* Синий цвет фона */
                  text-align: center;
                  color: #7d7d7d; /* Цвет текста */
                  padding: 0.5em; /* Поля вокруг текста */
                  pointer-events: none; /* Подсказка */
                  opacity: 0; /* Подсказка невидима */
                  text-transform: uppercase;
                  
                } 
                [data-value]:hover::after {
                  opacity: 1; /* Показываем подсказку */
                  top: 3.5em; /* Положение подсказки */
                  z-index: 2;
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
		            .add-new-one-content-2{
                  margin-top:14px;
                  display:none;
                }
		            .in-total{
                  color:red;
                  display: flex;

                  align-items: center;
                  justify-content: center;
                  background:#fff;
                  border:1px solid #9C9C9C;
                  cursor:pointer;
                  grid-column: span 5;
                  height: 50px;
                  svg {
                    fill: red;
                    padding-right: 2px;
                  }
              	}
                
                .in-total:hover {
                  background-color: #d11521;
                  color: #fff;
                  svg {
                    fill:  #fff;
                  }
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

                @media (width <= 1400px) {
                  .in-total, .export {
                    grid-column: span 2;
                  }
                  .select {
                    width: 50% !important;
                  }
                }
                @media (width <= 1145px) {
                  .in-total, .import_export {
                    grid-column: span 1;
                  }
                }

		            .main_content_select{
                  display:flex;
                }
		            .select {
                  position: relative;
                  display: flex;
                  flex-direction:column;
                  gap:10px;
                  width: 40%;
                }
		            .select_1, .select_2{
                  position: relative;
                }

                .select.active .dropdown-arrow {
                  transform: rotate(180deg);
                }
		            .select_page{
                  display:flex;
                  gap:15px;
                  align-items:center;
                  cursor:pointer;
                }
                .select p {
                  font-size: 18px
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
                  border: 2px solid #ccc;
                  background: none;
                  color:#ccc;
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

                .dropdown-select_2 {
                  width: 100%;
                  padding: 12px;
                  padding-right: 40px;
                  border: 1px solid #ccc;
                  box-sizing: border-box;
                  -moz-appearance: none;
                  appearance: none;
                  color: #7D7D7D;
                  outline: none;
                  cursor: pointer;
                }

                .dropdown-select_2:not(.active2):hover {
                  border: 1px solid #7D7D7D;
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
                  svg {
                    fill: #C3C3C3;
                  }
                }
                .dropdown-arrow {
                  position: absolute;
                  right: 50px;
                  top: 13px;
                  height: 18px;
                  width: 18px;
                  /*transform: translateY(-50%);*/
                  transform: rotate(0deg);
                  pointer-events: none;
                  font-size: 14px;
                  color: #999;
                  display:inline-block;
                }

                .two-arrow {
                  position: absolute;
                  right: 50px;
                  top: 13px;
                  height: 18px;
                  width: 18px;
                  transform: rotate(0deg);
                  pointer-events: none;
                  font-size: 14px;
                  color: #999;
                  display: inline-block;
                }
                .two-arrow.rotated {
                  transform: rotate(180deg);
                }
                .dropdown-arrow.rotated {
                  transform: rotate(180deg);
                }
		            .one-placeholder, .two-placeholder {
                  font-size: 18px;
                }
                .two-placeholder {
                  width: 220px;
                  position: absolute;
                  top: 15px;
                }
                .two-placeholder-resalt {
                  font-size: 18px;
                  color: #000000;
                  padding: 12px;
                  padding-right: 40px;
                  box-sizing: border-box;
                  -moz-appearance: none;
                  appearance: none;
                  outline: none;
                  cursor: pointer;
                  position: absolute;
                  top: 4px;
                  left: 1px;
                }

                .one, .two {
                  height: 54px;
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
                  width: 96.3%;
                  left: 0;
                }
                .popup p {
                  height: 30px;
                  color: #000000;
                }
                .two-popup {
                  display: flex;
                  flex-direction: column;
                  border: 1px solid #ccc;
                  padding: 10px;
                  background-color: #f9f9f9;
                  width: 96.3%;
                  position: absolute;
                  display: none;
                }
                .two-popup span {
                  display: flex;
                  align-items: center;
                  padding-top: 10px;
                  padding-bottom: 10px;
                  font-size: 18px;
                }
                
                .two-input {
                  margin-left: auto;
                }
                input[type='checkbox'] {
                  appearance: none;
                  position: relative;
                  height: 20px;
                  min-width: 20px;
                  border-radius: 1px;
                  text-overflow: ellipsis;
                  border: 2px solid #ccc;
                  border-radius: 5px;
                  overflow: visible;
                }
                input[type='checkbox']:checked::before {
                  content: '';
                  background-image: url('../assets/icons/fixed_icons/select.png');
                  width: 29px;
                  background-size: cover;
                  height: 29px;
                  position: absolute;
                  left: -5px;
                  top: -8px;
                }
                .btn-education {
                  background: rgb(0, 176, 217);
                  width: 100%;
                  height: 42px;
                  color: #fff;
                  font-size: 20px;
                  font-weight: 600;
                  line-height: 148.02%;
                  outline: none;
                  border: none;
                  cursor: pointer;
                }
                .btn-education:hover {
                  color: var(--yellow);
                }

                .active {
                  display: block;
                }
                
                .active2 {
                  padding-top: 0px;
                  padding-left: 7px;
                  .two-placeholder {
                    font-size: 14px;
                    top: 5px; 
                  }
                  border: 2px solid var(--blue);
                  z-index: 1;
                }

                .hidden {
                  display: none;
                }

                .visible {
                  display: block;
                  z-index: 1;
                }
                
                .selected-item {
                  display: block;
                  color: #000000;
                }

                .icon {
                  /*display: block;*/
                  font-family: "Icon";
                  width: fit-content;
                  height: fit-content;
                }

                .clear-selection {
                  display: block;
                  cursor: pointer;
                  width: 21px;
                  height: 21px;
                  position: absolute;
                  right: 10px;
                  top: 10px;
                  svg {
                    fill: #C3C3C3;
                  }
                }
                .two-clear-selection {
                  display: block;
                  cursor: pointer;
                  width: 21px;
                  height: 21px;
                  position: absolute;
                  right: 10px;
                  top: 10px;
                  svg {
                    fill: #C3C3C3;
                  }
                }
                
                .two-clear-selection:hover svg {
                  fill: black;
                }

                .clear-selection:hover svg {
                  fill: black;
                }

                .one.is-active {
                  padding-top: 0px;
                  padding-left: 7px;
                  .one-placeholder {
                    font-size: 10px;
                  } 
                }

                .one-text_is-active {
                  height: 26px;
                  font-size: 18px;
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
    		          text-align: start;
		            }
		            table.qualification-journal th {
    		          color: #9C9C9C;
    		          font-weight: 100;
    		          border: 1px solid #ddd;
    		          padding: 8px;
    		          text-align: center;
    		          font-size: 14px;
		            }
		            table.qualification-journal td {
    		          border: 1px solid #ddd;
    		          padding: 8px;
    		          text-align: left;
		            }
		            .edit_td >a:nth-child(1) {
    		          margin-right: 20px;
    		          margin-left: 20px;
		            }
		            table.qualification-journal td a {
    		          text-decoration: none;
		            }
		            table.qualification-journal td .icon {
    		          width: 20px;
    		          height: 20px;
    		          margin-right: 5px;
		            }  
		            @media (width <= 880px) {
                  .main_content_box{
                    padding: 0px 30px 30px 30px !important; 
                  }
		              .content_header_section{
                    grid-template-columns: 1fr 1fr;
                  }
		              .main_content_select{
                    gap:25px !important;
                    flex-direction:column;
                  }
                  .select{
                    width:100% !important;
                  }
		              .main_content_pagination{
                    display:none !important;
                  }
		              .element {
                    height: 50px;
                  }
		              .mobile_tabel {
        	          display: block;
    		          }
		              .cvalication_item > div {
        	          border: 1px solid #ccc;
        	          margin: 20px 0;
        	          display: flex;
        	          align-items: center;
        	          padding: 8px;
    		          }
		              .cvalication_item > div input {
        	          border: none;
         	          outline: none;
        	          padding: 0 0 0 5px;
    		          }
		              .min_tabel {
        	          border-top: 4px solid #00B0D9;
        	          padding: 12px;
        	          display: flex;
        	          margin-top: 20px;
    	    	      }
		              .min_tabel_left {
        	          border-right: 0.5px solid #808080;
    		          }
		              .min_tabel_left >div {
        	          color: #808080;
        	          font-size: 15px;
        	          padding: 8px 12px 8px 2px;
        	          border-top: 1px solid #808080;
    		          }
		              .min_tabel_left > div:last-child {
        	          border-bottom: 1px solid #808080;
    		          }
		              .min_tabel_right {
        	          width: 100%;
    		          }
		              .min_tabel_right >div {
        	          display: flex;
        	          align-items: center;
        	          color: #808080;
        	          font-size: 15px;
        	          padding: 8px 0 8px 2px;
        	          border-top: 1px solid #808080;
    		          }
		              .min_tabel_right_first {
        	          padding: 5px 0 5px 2px !important;
		                display: flex;
        	          justify-content: space-between;
    		          }
		              .min_tabel_right_first >div >img {
        	          width: 20.5px;
        	          margin-right: 40px;
    		          }
		              .min_tabel_right > div:last-child {
        	          border-bottom: 1px solid #808080;
    		          }
		              .qualification-journal {
        	          display: none !important;
    		          }
		            }
		            @media(width <= 561px) {
                  .content_header_section{
                    grid-template-columns: 1fr;
                  }
                  .content_header_section >div{
                    height:50px;
                  }
		            }
            </style>
        `;
    this.innerHTML = /*html*/ `
        ${STYLE}
            <div class="navbar-top-panel">
                <a href="#" class="navbar-top__link"><svg width="20" height="33" viewBox="0 0 32 33" class="svg-red" fill="red" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9997 3.09912H23.9997C25.4663 3.09912 26.6663 4.29912 26.6663 5.76579V27.0991C26.6663 28.5658 25.4663 29.7658 23.9997 29.7658H11.9997C10.533 29.7658 9.33301 28.5658 9.33301 27.0991V24.4325H11.9997V27.0991H23.9997V5.76579H11.9997V8.43245H9.33301V5.76579C9.33301 4.29912 10.533 3.09912 11.9997 3.09912Z" fill="white"/>
<path d="M13.4533 21.2194L15.3333 23.0994L22 16.4328L15.3333 9.76611L13.4533 11.6461L16.8933 15.0994H4V17.7661H16.8933L13.4533 21.2194Z" fill="white"/>
</svg>
 Войти</a>
            </div>
            <div class="mobile-control__menu-button">
                <p>Меню</p>
                <span class="icon burger"></span>
            </div>
		
	    <div class="brad-crumbs">
                <div class="brad-crumb__item">
                    <button class="brad-crumb__item__button">
                        <img src="assets/icons/fixed_icons/go-back.svg" width="23" alt="">
                    </button>
                </div>
                <div class= "brad-crumb__item__text_container">
                  <span class="brad-crumb__item__text"></span>
                </div>
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
        for (let index = 0; index < THRID_PANEL_TABS.slice(0, 8).length; index++) {
          const [tabName, icon, content, id] = THRID_PANEL_TABS[index];
          if (!tabName || !icon) continue; // Проверяем, что данные существуют

          markup += this.THIRD_PANEL_TAB_TEMPLATE(
            tabName,
            icon,
            content,
            { id, tabNameClasses: tabName === "вакансии объед" ? "no-white" : "" }
          );

          setTimeout(() => {
            // console.log(document.querySelector(`.tab${id}`).lastElementChild.offsetWidth);
            // console.log(document.querySelector(`.tab${id}`).lastElementChild.scrollWidth);
            if (document.querySelector(`.tab${id}`).lastElementChild.offsetWidth < document.querySelector(`.tab${id}`).lastElementChild.scrollWidth) {
              console.log(true);


              // tippy(`.tab${id}`, {
              //   content: content,
              //   placement: 'bottom',
              //   arrow: false,
              //   theme: 'customTip',
              //   maxWidth: 'none'
              // });
            } else {
              console.log(false);
            }
          }, 500);

        }


        return markup;
      })()}
                    <div class="third-panel__tab more">
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
        ] of THRID_PANEL_TABS.slice(8).entries()) {
          if (index == 8) {
            markup += `<div class="third-panel__tab more"></div>`;
          }
          const [tabName, icon, content, id] = THRID_PANEL_TABS[index + 8];
          markup += this.THIRD_PANEL_TAB_TEMPLATE(
            tabName,
            icon,
            content,
            { id, tabNameClasses: tabName === "вакансии объед" ? "no-white" : "" }
          );

          // setTimeout(() => {
          //   // console.log(document.querySelector(`.tab${id}`).lastElementChild);
          //   // console.log(document.querySelector(`.tab${id}`).lastElementChild);

          //   if (document.querySelector(`.tab${id}`).lastElementChild.offsetWidth < document.querySelector(`.tab${id}`).lastElementChild.scrollWidth) {
          //     tippy(`.tab${id}`, {
          //       content: content,
          //       placement: 'bottom',
          //       arrow: false,
          //       theme: 'customTip',
          //       maxWidth: 'none'
          //     });
          //   }
          // }, 500);

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
                <div class="date-picker-text" data-value="введите дату начала поиска">
                    ДАТА OT
                    <span class="date-picker-start">10 СЕНТЯБРЯ 2024</span>
                </div>
            </div>
            <div class="date-picker-container element">
                <div class="date-picker-text" data-value="введите дату конца поиска">
                    ДАТА ДО
                    <span class="date-picker-end">20 СЕНТЯБРЯ 2024</span>
                </div>

            </div>
            <div class="add-new-one element" data-value="добавить новую вакансию" onclick="openAddNewOnePopap()">
                + ADD A NEW ONE
            </div>
            
            <div class="import_export element" data-value="импортировать" onclick="openImportPopap()">
                <img src='./assets/icons/fixed_icons/Group36_1 .svg'  />
                IMPORT
            </div>
            <div class="import_export export element" data-value="экспортировать" onclick="openExportPopap()">
                <img src='./assets/icons/fixed_icons/Group36.svg' />
                EXPORT
            </div>
            <div class="in-total element" data-value="удалить вакансию">
                <svg width="25" height="26" viewBox="0 0 50 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.57812 24C2.57812 11.8494 12.4276 2 24.5782 2C36.7288 2 46.5782 11.8494 46.5782 24C46.5782 36.1506 36.7288 46 24.5782 46C12.4276 46 2.57812 36.1506 2.57812 24ZM24.5782 6C14.6367 6 6.57812 14.0586 6.57812 24C6.57812 33.9414 14.6367 42 24.5782 42C34.5196 42 42.5782 33.9414 42.5782 24C42.5782 14.0586 34.5196 6 24.5782 6ZM17.5077 16.93C18.2886 16.1489 19.5549 16.1486 20.3361 16.9295L24.5799 21.1718L28.822 16.9298C29.603 16.1487 30.8694 16.1487 31.6504 16.9298C32.4315 17.7108 32.4315 18.9772 31.6504 19.7582L27.4086 24L31.6504 28.2418C32.4315 29.0228 32.4315 30.2892 31.6504 31.0702C30.8694 31.8513 29.603 31.8513 28.822 31.0702L24.5799 26.8282L20.3361 31.0705C19.5549 31.8514 18.2886 31.8511 17.5077 31.07C16.7267 30.2888 16.727 29.0224 17.5082 28.2415L21.7513 24L17.5082 19.7585C16.727 18.9776 16.7267 17.7112 17.5077 16.93Z"/>
                </svg>
                DESELECT
            </div>
        </div>
                <div class="main_content">
                      <div class="main_content_select">
                        <div class="select">
                          <p>Тип учебного заведения</p>
                          <div class="select_2">





                            <div class="dropdown-select_2 two">
                              <span class="two-placeholder">Тип учебного заведения</span>
                              <span class="two-placeholder-resalt"></span>
                            </div>
                            <div class="two-clear-selection">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12,2 C17.5229861,2 22,6.47701386 22,12 C22,17.5229861 17.5229861,22 12,22 C6.47701386,22 2,17.5229861 2,12 C2,6.47701386 6.47701386,2 12,2 Z M13.4142136,12 L16.2426407,9.17157288 C16.633165,8.78104858 16.633165,8.1478836 16.2426407,7.75735931 C15.8521164,7.36683502 15.2189514,7.36683502 14.8284271,7.75735931 L12,10.5857864 L9.17157288,7.75735931 C8.78104858,7.36683502 8.1478836,7.36683502 7.75735931,7.75735931 C7.36683502,8.1478836 7.36683502,8.78104858 7.75735931,9.17157288 L10.5857864,12 L7.75735931,14.8284271 C7.36683502,15.2189514 7.36683502,15.8521164 7.75735931,16.2426407 C8.1478836,16.633165 8.78104858,16.633165 9.17157288,16.2426407 L12,13.4142136 L14.8284271,16.2426407 C15.2189514,16.633165 15.8521164,16.633165 16.2426407,16.2426407 C16.633165,15.8521164 16.633165,15.2189514 16.2426407,14.8284271 L13.4142136,12 Z"/>
                              </svg>
                            </div>
                            <div class="two-arrow"><img src="./assets/icons/arrow.svg" alt=""></div>
                            <div class="two-popup">
                              <span><label for="check1">По всем</label><input class="two-input" type="checkbox" id="check1"></span>
                              <span><label for="check2">Школы, гимназии</label><input class="two-input" type="checkbox" id="check2"></span>
                              <span><label for="check3">Среднее-специальное учебное заведение</label><input class="two-input" type="checkbox" id="check3"></span>
                              <span><label for="check4">Высшее-специальное</label><input class="two-input" type="checkbox" id="check4"></span>
                              <button class="btn-education">Выбрать</button>
                            </div>
                          </div>
                        </div>



                        <div class="select">
                          <p>Регион учебных заведений</p>


			                    <div class="select_1">
                            <div class="dropdown-select one">
                              <span class="one-placeholder">Выберите регион</span>
                              <textarea class="one-text"></textarea>
                              <span class="selected-item hidden"></span>
                            </div>
                            <div class="dropdown-arrow"><img src="./assets/icons/arrow.svg" alt=""></div>
                            <div class="clear-selection hidden"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12,2 C17.5229861,2 22,6.47701386 22,12 C22,17.5229861 17.5229861,22 12,22 C6.47701386,22 2,17.5229861 2,12 C2,6.47701386 6.47701386,2 12,2 Z M13.4142136,12 L16.2426407,9.17157288 C16.633165,8.78104858 16.633165,8.1478836 16.2426407,7.75735931 C15.8521164,7.36683502 15.2189514,7.36683502 14.8284271,7.75735931 L12,10.5857864 L9.17157288,7.75735931 C8.78104858,7.36683502 8.1478836,7.36683502 7.75735931,7.75735931 C7.36683502,8.1478836 7.36683502,8.78104858 7.75735931,9.17157288 L10.5857864,12 L7.75735931,14.8284271 C7.36683502,15.2189514 7.36683502,15.8521164 7.75735931,16.2426407 C8.1478836,16.633165 8.78104858,16.633165 9.17157288,16.2426407 L12,13.4142136 L14.8284271,16.2426407 C15.2189514,16.633165 15.8521164,16.633165 16.2426407,16.2426407 C16.633165,15.8521164 16.633165,15.2189514 16.2426407,14.8284271 L13.4142136,12 Z"/>
</svg></div>
                            <div class="popup hidden">
                              <p class="popup-item">Нижний Новгород</p>
                              <p class="popup-item">Арзамас</p>
                              <p class="popup-item">Балахна</p>
                              <p class="popup-item">Богородск</p>
                              <p class="popup-item">Бор</p>
                              <p class="popup-item">Ветлуга</p>
                              <p class="popup-item">Володарск</p>
                              <p class="popup-item">Ворсма</p>
                              <p class="popup-item">Выкса</p>
                              <p class="popup-item">Горбатов</p>
                              <p class="popup-item">Городец</p>
                              <p class="popup-item">Дзержинск</p>
                              <p class="popup-item">Заволжье</p>
                              <p class="popup-item">Княгинино</p>
                              <p class="popup-item">Кстово</p>
                              <p class="popup-item">Кулебаки</p>
                              <p class="popup-item">Лукоянов</p>
                              <p class="popup-item">Лысково</p>
                              <p class="popup-item">Навашино</p>
                              <p class="popup-item">Павлово</p>
                              <p class="popup-item">Первомайск</p>  
                              <p class="popup-item">Перевоз</p>
                              <p class="popup-item">Саров</p>
                              <p class="popup-item">Семенов</p>
                              <p class="popup-item">Сергач</p>
                              <p class="popup-item">Урень</p>
                              <p class="popup-item">Чкаловск</p>
                              <p class="popup-item">Шахунья</p>
                              <p class="popup-item">Алтайский край</p>
                              <p class="popup-item">Амурская область</p>  
                              <p class="popup-item">Архангельская область</p>
                              <p class="popup-item">Астраханская область</p>
                              <p class="popup-item">Белгородская область</p>
                              <p class="popup-item">Брянская область</p>
                              <p class="popup-item">Владимирская область</p>  
                              <p class="popup-item">Волгоградская область</p>
                              <p class="popup-item">Вологодская область</p>
                              <p class="popup-item">Воронежская область</p>
                              <p class="popup-item">Донецкая Народная Республика</p>
                              <p class="popup-item">Еврейская автономная область</p>
                              <p class="popup-item">Забайкальский край</p>
                              <p class="popup-item">Запорожская область</p>
                              <p class="popup-item">Ивановская область</p>
                              <p class="popup-item">Иркутская область</p> 
                              <p class="popup-item">Кабардино-Балкарская Республика</p>
                              <p class="popup-item">Калининградская область</p>
                              <p class="popup-item">Калужская область</p>
                              <p class="popup-item">Камчатский край</p>
                              <p class="popup-item">Карачаево-Черкесская Республика</p>  
                              <p class="popup-item">Кемеровская область</p>
                              <p class="popup-item">Кировская область</p>
                              <p class="popup-item">Костромская область</p>
                              <p class="popup-item">Краснодарский край</p>
                              <p class="popup-item">Красноярский край</p>
                              <p class="popup-item">Крым</p>
                              <p class="popup-item">Курганская область</p>
                              <p class="popup-item">Курская область</p>
                              <p class="popup-item">Ленинградская область</p> 
                              <p class="popup-item">Липецкая область</p>
                              <p class="popup-item">Луганская Народная Республика</p>
                              <p class="popup-item">Магаданская область</p>
                              <p class="popup-item">Москва</p>
                              <p class="popup-item">Московская область</p>
                              <p class="popup-item">Мурманская область</p>
                              <p class="popup-item">Ненецкий автономный округ</p>
                              <p class="popup-item">Нижегородская область</p>                              
                              <p class="popup-item">Новгородская область</p>
                              <p class="popup-item">Новосибирская область</p>
                              <p class="popup-item">Омская область</p>
                              <p class="popup-item">Оренбургская область</p>
                              <p class="popup-item">Орловская область</p>
                              <p class="popup-item">Пензенская область</p>
                              <p class="popup-item">Пермский край</p>
                              <p class="popup-item">Приморский край</p>    
                              <p class="popup-item">Псковская область</p>
                              <p class="popup-item">Республика Адыгея</p>
                              <p class="popup-item">Республика Алтай</p>
                              <p class="popup-item">Республика Башкортостан</p>
                              <p class="popup-item">Республика Бурятия</p>
                              <p class="popup-item">Республика Дагестан</p>
                              <p class="popup-item">Республика Ингушетия</p>
                              <p class="popup-item">Республика Калмыкия</p>
                              <p class="popup-item">Республика Карелия</p>
                              <p class="popup-item">Республика Коми</p>
                              <p class="popup-item">Республика Марий Эл</p>
                              <p class="popup-item">Республика Мордовия</p>
                              <p class="popup-item">Республика Саха (Якутия)</p>
                              <p class="popup-item">Республика Северная Осетия — Алания</p>
                              <p class="popup-item">Республика Татарстан</p>    
                              <p class="popup-item">Республика Тыва</p>
                              <p class="popup-item">Республика Хакасия</p>
                              <p class="popup-item">Ростовская область</p>
                              <p class="popup-item">Рязанская область</p>
                              <p class="popup-item">Самарская область</p>
                              <p class="popup-item">Санкт-Петербург</p>
                              <p class="popup-item">Саратовская область</p>
                              <p class="popup-item">Сахалинская область</p>
                              <p class="popup-item">Свердловская область</p>
                              <p class="popup-item">Севастополь</p>
                              <p class="popup-item">Смоленская область</p>
                              <p class="popup-item">Ставропольский край</p>
                              <p class="popup-item">Тамбовская область</p>
                              <p class="popup-item">Тверская область</p>
                              <p class="popup-item">Томская область</p>    
                              <p class="popup-item">Тульская область</p>
                              <p class="popup-item">Тюменская область</p>
                              <p class="popup-item">Удмуртская Республика</p>
                              <p class="popup-item">Ульяновская область</p>
                              <p class="popup-item">Хабаровский край</p>
                              <p class="popup-item">Ханты-Мансийский автономный округ — Югра</p>
                              <p class="popup-item">Херсонская область</p>
                              <p class="popup-item">Челябинская область</p>   
                              <p class="popup-item">Чеченская Республика</p>
                              <p class="popup-item">Чувашская Республика</p>
                              <p class="popup-item">Чукотский автономный округ</p>
                              <p class="popup-item">Ямало-Ненецкий автономный округ</p>
                              <p class="popup-item">Ярославская область</p>
                            </div>
                          
                          </div>



                          <!--<div class="select_2" onclick="toggleDropdown(this)">
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
                            <div class="dropdown-clear" onclick="clearSelection()">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="#C3C3C3" width="24" height="24" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12,2 C17.5229861,2 22,6.47701386 22,12 C22,17.5229861 17.5229861,22 12,22 C6.47701386,22 2,17.5229861 2,12 C2,6.47701386 6.47701386,2 12,2 Z M13.4142136,12 L16.2426407,9.17157288 C16.633165,8.78104858 16.633165,8.1478836 16.2426407,7.75735931 C15.8521164,7.36683502 15.2189514,7.36683502 14.8284271,7.75735931 L12,10.5857864 L9.17157288,7.75735931 C8.78104858,7.36683502 8.1478836,7.36683502 7.75735931,7.75735931 C7.36683502,8.1478836 7.36683502,8.78104858 7.75735931,9.17157288 L10.5857864,12 L7.75735931,14.8284271 C7.36683502,15.2189514 7.36683502,15.8521164 7.75735931,16.2426407 C8.1478836,16.633165 8.78104858,16.633165 9.17157288,16.2426407 L12,13.4142136 L14.8284271,16.2426407 C15.2189514,16.633165 15.8521164,16.633165 16.2426407,16.2426407 C16.633165,15.8521164 16.633165,15.2189514 16.2426407,14.8284271 L13.4142136,12 Z"/>
                              </svg>
                            </div>
                            <div class="dropdown-arrow arrow"><img src="./assets/icons/arrow.svg" alt=""></div>
                          </div>-->
                        </div>
                      </div>
                      <div class="main_content_pagination">
                        <div class="select_page">
                          <p>Укажите страницу</p>
                          <input type="text">
                          <button> Go </button>
                        </div>
                        <div class="number_of_pagination" id="pag">
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
                        </div>
                      </div>
                </div>
            </div>





         
        `;
  }




  setup() {
    const thirdPanel = this.querySelector(".third-panel")
    this.querySelectorAll(".second-panel__tab").forEach((el) => {
      this.querySelectorAll(".third-panel__tab").forEach((el) => {
        el.classList.remove("third-panel__tab_active");
        if (el.innerHTML.includes('Квалификации Специальности')) {
          el.classList.add('third-panel__tab_active')
        }
      })
      el.addEventListener("click", () => {
        if (el.getAttribute("id") == "journals_tab") {
          thirdPanel.setAttribute('style', 'display:grid;')
          this.querySelectorAll(".third-panel__tab").forEach((el) => {
            el.classList.remove("third-panel__tab_active");
            if (el.innerHTML.includes('Квалификации Специальности')) {
              el.classList.add('third-panel__tab_active')
            }
          });
        } else {
          thirdPanel.setAttribute('style', 'display:none;')
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




      detectedOverflow()
    };

    this.querySelectorAll(".third-panel__tab:not(.more)").forEach(
      (el, index) => {
        el.onclick = (event) => {
          page2 = findTab(el.querySelector('p').innerHTML.toLowerCase())
          page = el.querySelector('p').innerHTML.toLowerCase()
          document.title = page.toUpperCase()
          checkPagePC()
          this.querySelectorAll(".third-panel__tab").forEach((el) => {


            el.classList.remove("third-panel__tab_active");
          });

          el.classList.add("third-panel__tab_active");
        };
        // if (index == 1) {
        //   el.classList.add("third-panel__tab_active");
        // }
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

customElements.define("navbar-elem", Navbar);





function removeWhitespace(text) {
  return text.replace(/\s+/g, '');
};

function toggleDatePickerStart() {
  const datePicker = document.getElementById('date-picker-start')
  datePicker.showPicker();
};

function toggleDatePickerEnd() {
  const datePicker = document.getElementById('date-picker-end')
  datePicker.showPicker();
};


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

function cloasePopap() {
  const popapImportExporAddNew = document.querySelector('#popap_import_expor_addNew');
  const addNewOneContent = document.querySelector('.add-new-one-content-2');
  const fileInputContainer = document.querySelector('.file-input-container');

  addNewOneContent.style.display = "none"
  fileInputContainer.style.display = "none"
  popapImportExporAddNew.style.display = "none"

};

function openAddNewOnePopap() {
  const popapImportExporAddNewContentTitle = document.querySelector('#popap_import_expor_addNew_content_title');
  const popapImportExporAddNew = document.querySelector('#popap_import_expor_addNew');
  const addNewOneContent = document.querySelector('.add-new-one-content-2');
  popapImportExporAddNew.style.display = "flex"
  addNewOneContent.style.display = "block"
  popapImportExporAddNewContentTitle.innerText = "Добавить квалификацию"
}


function checkPagePC() {
  // const searchMenu = document.querySelector('.search-menu')
  const bt = document.querySelector('.big-title')
  const btMB = document.querySelector('.brad-crumb__item__text')
  const btPC = document.querySelector('.big-title-pc')

  bt.innerHTML = 'Журнал: ' + page2.toUpperCase()
  btMB.innerHTML = 'Журнал: ' + page2.toUpperCase()
  btPC.innerHTML = page2.toUpperCase()
  // if (page2 == 'поиск') {
  //   searchMenu.style.display = 'block'
  // } else {
  //   searchMenu.style.display = 'none'
  // }
}

function isEllipsisActive(e) {
  console.log(e.offsetWidth < e.scrollWidth);

  return (e.offsetWidth < e.scrollWidth);
}



function detectedOverflow() {
  for (let index = 0; index < THRID_PANEL_TABS.length; index++) {
    const [tabName, icon, content, id, kvota] = THRID_PANEL_TABS[index];
    if (!tabName || !icon) continue; // Проверяем, что данные существуют

    const tabSelector = `.tab${id}`;
    const tabElement = document.querySelector(tabSelector);

    if (tabElement) {
      const lastChild = tabElement.lastElementChild;
      const offW = lastChild.offsetWidth;
      const scrollW = lastChild.scrollWidth;

      // Проверяем, существует ли уже Tippy-инстанция
      if (tabElement._tippy) {
        tabElement._tippy.destroy(); // Уничтожаем существующую Tippy-инстанцию
      }

      if (offW < scrollW || kvota) {
        document.querySelector(tabSelector).lastElementChild.style.textAlign = 'left';
        tippy(tabSelector, {
          content: content,
          placement: 'bottom',
          arrow: false,
          theme: 'customTip',
          maxWidth: 'none'
        });
      }
    }
  }
}


window.onresize = () => {
  detectedOverflow()
}


setTimeout(() => {
  detectedOverflow();
}, 500);


function findTab(text) {
  for (let k = 0; k < THRID_PANEL_TABS.length; k++) {
    const item = THRID_PANEL_TABS[k];
    // Проверяем, является ли элемент строкой
    let inddex = item.findIndex(e =>
      typeof e === 'string' && e.toLowerCase() === text.toLowerCase()
    );

    // Если совпадение найдено, возвращаем индекс
    if (inddex !== -1) {
      return THRID_PANEL_TABS[k][inddex+2];
    }
  }
  // Если совпадение не найдено, возвращаем -1
  return 'Undefined';
}