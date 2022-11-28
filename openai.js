const newFunc = () => {
    const programName = document.getElementById("program-name-box").value
   // const programLang = document.getElementById("program-lang-box").value
    const settings=
        {
    "model": "text-davinci-002",
    "prompt": `${programName}`,
    "temperature": 0.7,
    "max_tokens": 256,
    "top_p": 1,
    "frequency_penalty": 0,
    "presence_penalty": 0
    }

    axios({
  method: 'post',
  headers:{
    Authorization: 'Bearer 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'
  },
  url: 'https://api.openai.com/v1/completions',
  data: settings
}).then((response)=>{
 
    console.log(response.data.choices[0].text);
    document.getElementById("result").innerHTML=response.data.choices[0].text
})
}