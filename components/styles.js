exports.css = `
    body{
        background-color: #282a36;
    }
    * {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        color: white;
        text-decoration: none;
      }
      
      .btn{
        width: 50px;
        height: 50px;
      }
    
      h1,
      p, 
      input,
      hr {
        margin: 1vh 2vh 1vh 2vh;
      }
    
      h1{
          margin-top: 2vh;
      }
    
      h2{
        color: white;
      }
    
      div{
          display: flex;
          flex-direction: column;
      }
    
      body{
        min-height: 100%;
      }
    
      #master{
        width: 100%;
        height: 100%;
        background-color: #282a36;
      }
    
      .navbar{
        z-index: 1;
        position: fixed;
        top: 0;
        width: 100%;
        height: 8vh;
        box-shadow: 0 0 2vh rgba(0,0,0,.2);
        background-color: #282a36;
        display: flex;
        overflow-x: auto;
        align-items: center;
        flex-direction: row;
        justify-content: center;
      }

      .navbar.title-left{
          justify-content: space-between;
      }

      .navbar-title{
          margin-left: 2.5vh
      }
      
      .items-navbar{
        display: flex;
        flex-direction: row;
        margin-right: 2.5vh;
        justify-content: space-around;
      }

      .card {
        padding: 1vh 2.5vh 2.5vh 2.5vh;
        align-items: center;
        margin-top: 2vh;
        overflow-wrap: break-word;
        background-color: #44475a;
        align-self: flex-start;
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 1vh;
        box-shadow: 0 0 5px rgba(0,0,0,.2);
      } 
    
      @media (min-width: 700px) and (orientation: landscape) {
        .card {
          width: 70vh;
          height: 55vh;
        }
      }

      @media (orientation: portrait) {
        .card {
          width: 80vw;
          height: 50vh;
        }
        .post_img{
          height:70%;
        }
      }

      .avatar{
        width: 5vh;
        height: 5vh;
        border-radius: 10vh;
        object-fit: cover;
        box-shadow: 0 0 5px rgba(0,0,0,.2);
      }
    
      .post_img{
        height: 75%;
        width: 100%;
        object-fit: contain;
        background-color: #282a36;
        border-radius: 1vh;
        margin: 1.5vh 0 1vh 0;
      }
    
      #feedUpperMargin, #main{
        width: 100%;
        margin-top: 10vh;
        align-items: center;
      }

      #main{
        align-items: start;
      }
    
      .descript, .descript_header, .descript_card, .descript_footer{
        margin: 0;
        color: white;
        height: auto;
      }
    
      .descript_card{
        margin: 1vh 0 0 0;
      }
    
      .card_header{
        flex-direction: row;
        align-items: flex-start;
        margin-top: 0.8vh;
      }
    
      .descript_footer{
        margin: 1vh 0 1vh 0;
      }
    
      .descript_header{
        margin: 0.13vh 0vh 0vh 1vh;
      }
      .descript_header > p{
        margin: 0;
      }
    
    `;
