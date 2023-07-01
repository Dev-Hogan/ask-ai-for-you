import http from "@/utils/http"

export function listModel() {
	return http.get("/models")
}

// 调用接口
export function askWord(data) {
	return http.post("/completions", {
		model: "text-davinci-003",
		prompt: data,
		max_tokens: 20,
		temperature: 0,
	})
}
