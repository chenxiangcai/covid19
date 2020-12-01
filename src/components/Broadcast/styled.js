import styled from 'styled-components'

export const Wrap = styled.div`
    display:flex; 
    .tabLeft{
        width:100px;
        position:relative;
        top:15px;
        flex:none;
        background-color:pink
        
        .leftTime{
            position: absolute;
            right: 10px;
            top:200px;
            font-weight: 500;
            font-size: 15px;
            text-align: right;
        }
        .leftDot{
            position: absolute;
            top: 0;
            left: 72px;
            z-index: 2;
            display: inline-block;
            width: 17px;
            height: 17px;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABMRJREFUaAXVWs9rXVUQnjnvPdKmECtoaG0lIVCKG7sQXGlboa3YKuifoRA3unKVP0A3FvTPUNAq1kJ/uSp00W6kFEJCiy2xYC00bXjvnXG+SW56G9+Zc1/euw33bN7NmTkz33d+z5wwjaEcX5A23V86GAK/Jkx7A4UpijIhQTowz5G7FHgtUnzEQg9jlL9o3+zdSwvcG9U9b9fAB/O3J572WrPM7RkFfVABt4eyFbinZO6K9JZ3tftLv549tDZU+w3loQksaG9f+Xv5TYrhiNB6D2/HcbkNE0Yo3jj66szNhSFHpTIBBR7+WFk+LNJ6S6fCZBnAuL516q0y96+/Mz1zS4nEKnYrETj15f093dWn75PwK1WMjqzD8qAzueu381/ve5yzlSWg4Kf7j7un6ur1FECMRmtP57ySWEnpoN4lcPLzO4dij45GiS3PSF2ywKEf2nTl929fv53ykSQA8L1ufC/V8EXWtzvhYorEQAI2bVa7Hw3T8xy4RSKHo4QjanQ/sezVNfOSEWX5V78fCtG9wPEGMd+SKP2qnYCRaE12fho0nf5HAAtW5/wnVec8M0+J0Ic6Gd8mod2VQDE9Ud1rzPSziDyq0mZjTfywdWE/RwBb5eWV5Y8r7TaR23q6nmaSE9qzE1VAbNVR52tCfEEPwV8oSP5U1t3p2PTMj+UtNpSNYp+vAh69ToG+IJIz2wUPv+tt5Qxsmc0ymEHfuo0bxpJskwBOWBxSJVnq80AU+kqFcymFbdTPbdg8kGsLjMBa6G0SwPUgN+9tvhPP69C/XBgY1y9s6nSaz40EMNpVZsOxEcDFDHcbF4zOeV2sn9YBvvBrJNQHYX15RbEaZtUxArhVZi9mumBVf5zTJgVxDptDSoh6YAVmfBsBXInxR6pgWLHbpOTjroev3FQqMIfjWLy4zzsF+/wou41jeqAIvuxsGShdrwRmYA+IpLxgxE5YHFIvuqhP853yiwDKokANA1M6Vq/XA5101U5Y19CQQviEb6cghA2IYR0dHZzM7uQ1HlGW8w3sQe8YU54f3dr2e/I6ZTnfwB60i/17DG6VO1VyvhV7KFIfSYzFlTipUKMg4xvY7RyoEcKIpnVDzRSNLzSl4RUEIztVmFzfwK7rgP2EkkZSO4UfUZzrW7EHvd25EZEO4j3XSI3CnG9gD8hVehgshvUUapTlfAN7sESrB0IDcI13n3gqtcjgE76dAuwBWWJdB8l41LIHGoA7duoRqU83cwHMij0gxY0ssYcC2QM9Ff3F7hkYUgZf8Ok1A2Zgt3MAKW5PGakPyx54SmOUwVcu3VJgNgLIz1uK2wOB1AfRoqcyJtmipVkcY8AKzFAxAva4oPl5p41qSk+H9Xvd2v5x9UYQwjZ8ZHNEirV4ENm8SuBxQU+1Vc8/hlXDvbN1kDDwsJ3J1AEjsBY4db08Kyc+W3qjL/zus5rBX5ZeQfZgfEH+oo1uBjzQtFiuXvhu9s8C2eYIoAIvI5qUfVAIU7/WS5G+0ez8uVF2p/W2fI7UVq7nDYtiM4wlYM+NAOobndwtiDU6vV6QaPQDR5lEY5+YChI2nZr6yFci0dxn1oKE5uSb+9BdkMAvHhca+a8GZRL4buw/e2wlgr+RJd6pf7f5D2ekfj9S76oCAAAAAElFTkSuQmCC) no-repeat;
            background-size: cover;
        }
        .leftLine{
            position: absolute;
            top: 10px;
            left: 80px;
            display: inline-block;
            width: 2px;
            height: 95%;
            background: #ebebeb;
        }
    }
    
    .tabRight{
            color:#57606f;
            position: relative;
            flex-grow: 1;
            margin-bottom: 10px;
            padding: 20px 30px ;
            background: #f1f2f6;
            border-radius: 5px;
            
            .isLatest{
                background-color:#f74c31;
                margin-right:7px;
                border-radius:3px;
                padding:1px;
                font-size:15px;
                font-weight:600;
                color:#fff;
            }
            
            .topicTitle{
                padding-top:2px;
                color: #333;
                height:34px;
                display:inline-block;
                font-weight: 600;
                font-size: 20px;
                line-height: 20px;
                text-overflow: ellipsis;
                }
            }
            .topicContent{
                overflow: hidden;
                font-size: 15px;
                line-height: 25px;
                text-overflow: ellipsis;
                word-break: break-word;     
                
                a{
                    color: #57606f;
                }         
            }
            
            .topicFrom{
                color: #999;
                font-size: 15px;
                text-align: right;
                margin: -10px 0 0 0;
            }
    }
   
`