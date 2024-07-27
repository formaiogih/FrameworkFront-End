<template>
    <!DOCTYPE html>
  
    <html lang="pt-br">
    
    <body>
    
            <img src="../assets/aristoteles.jpeg" alt="Imagem 1" width="800" height="700" id="aristoteles">
    
    </body>
    
    </html>
  </template>
  
  <script>
  export default {
  name: 'ImagemAristoteles',
  };
  </script>
  
  <style scoped>
  img {
    border-radius: 20px;
  }
  
  
  @media (max-width: 1300px) {
    #responsivo {
        display: flex;
        flex-direction: row;
    }

    iframe{
        width: 102%;
        height: 400px;
    }
  }
  
  
  @media (max-width: 890px) {
    #responsivo {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
    }
  
    #aristoteles{
        width: 90%;
    }
  
    .imgs{
        width: 95%;
        height: auto;
    }
    
  }
  
  @media (max-width: 500px){
    .imgs{
        width: 90%;
    }
  }
  
  </style>