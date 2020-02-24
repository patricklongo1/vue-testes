import { injectGlobal } from "vue-styled-components";

export default injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    *:focus {
        outline: 0;
    }
    html, body, #app {
        min-height: 100%;
    }
    body {
        background: #f5f5f5;
        -webkit-font-smoothing: antialiased !important;
        text-rendering: optimizeLegibility !important;
    }
    body, input, button, h1, p, span, small {
        font: 'Roboto', sans-serif;
    }
    a {
        text-decoration: none;
    }
    ul {
        list-style: none;
    }
    button {
        border: 0;
        cursor: pointer;
    }
`;
