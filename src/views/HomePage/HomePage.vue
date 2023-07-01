<template>
  <div class="AksAi">
    <div>
      <h1>Let Me Ask AI For You...</h1>
    </div>
    <div class="description-section">
      <h2>
        你的朋友可能是使用谷歌、必应和公司的专家，但他们知道人工智能的真正功能吗？输入您的问题并分享链接。向你的朋友展示人工智能可以做的令人惊叹的事情。
      </h2>
    </div>
    <div class="searchbar">
      <input v-model="input" type="text" placeholder="Ask me anything" />
    </div>
    <div class="SearchBtn">
      <button @click="askmsg">Ai Search</button>
      <button>Go To Answer</button>
    </div>
    <div class="copy-url-container">
      <input type="text" value="https://www.ai.com/" />
      <button>Copy Link</button>
    </div>
    <div class="searchbar">
       <div v-html="answer"></div>
      </div>
  </div>
</template>
<script>
import { askWord } from '@/api/text';
export default {
  data() {
    return {
      input: '',
      answer:''
    }
  },
  methods: {
    async askmsg() {
      const res = await askWord(this.input)
      this.answer = res.data.choices[0].text
    }
  }
}
</script>
<style>
.AksAi {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  font-size: 3em;
  text-align: center;
  color: #333333;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 32px;
  margin-top: 100px;
}

h2 {
  font-size: 18px;
  text-align: center;
  color: #333333;
  margin: 8px;
  font-weight: 400;
  line-height: 30px;
}

.description-section {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 700px;
  margin: 0 auto;
}

.searchbar {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 515px;
  height: 45px;
  margin: 0 auto;
  padding: 0 30px;
  border: 1px solid #ccc;
  border-radius: 30px;
  margin-top: 20px;
}

.searchbar input {
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  font-size: 16px;
  color: #333333;
}

.SearchBtn {
  margin: 0 auto;
  /* 居中 */
  display: flex;
  justify-content: center;
  margin: 20px;
}

.SearchBtn button {
  margin: 0 10px;
  padding: 10px 20px;
  border: 1px solid transparent;
  outline: none;
  border-radius: 4px;
  color: #707070;
  background-color: #f5f5f5;
  cursor: pointer;
  font-size: 15px;
}

.SearchBtn button:hover {
  border: 1px solid #707070;
}

.copy-url-container {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 445px;
  height: 35px;
  margin: 0 auto;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: #eee;
  display: flex;
  justify-content: space-between;
  padding: 6px 10px;
  align-items: center;
}

.copy-url-container input {
  flex-grow: 1;
  background-color: #eee;
  height: 25px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 15px;
  border: 1px solid transparent;
  padding-left: 10px;
}

.copy-url-container input:focus {
  border: 2px solid #4885ed ;
}

.copy-url-container button {
  border: 1px solid transparent;
  outline: none;
  border-radius: 4px;
  color: #707070;
  background-color: #f5f5f5;
  cursor: pointer;
  font-size: 14px;
  height: 30px;
}

.copy-url-container button:hover {
  border: 1px solid #707070;
}

button:focus,
button:active {
  border: 1px solid #4885ed !important;
}

</style>
