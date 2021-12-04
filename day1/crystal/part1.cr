input = File.read("../day1.input")
inputArr = input.split("\n")

noi = 0
index = 1

while index < inputArr.size
  el = inputArr[index].to_i
  prevEl = inputArr[index - 1].to_i
  noi += 1 if el > prevEl
  index += 1
end

puts noi
