from transformers import AutoTokenizer
import transformers
import torch

# 모델로딩
model = "meta-llama/Llama-2-7b-chat-hf" #Llama-2-7b-chat model load
tokenizer = AutoTokenizer.from_pretrained(
    model,
    use_auth_token="여기에는 발급받은 토큰값을 입력하세요!!!",
)

# 파이프라인 설정
pipeline = transformers.pipeline(
    "text-generation",  #반환 정의
    model=model,
    torch_dtype=torch.float16,
    device_map="auto", #cpu, gpu
)