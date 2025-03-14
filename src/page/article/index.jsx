// 单独文件组件
// 其实就是一个函数返回html及逻辑，最后抛出
import { useMemo, useState } from "react";
const Article = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')
  
    // 使用 useMemo 缓存计算结果
    const expensiveValue = useMemo(() => {
        console.log('触发了')
      let result = 0
      for(let i = 0; i < 100000000; i++) {
        result += i
      }
      return result + count
    },[count]) // 只有 count 改变时才重新计算
  
    return <div>
        <h2>UseMemo 示例</h2>
        <p>计算结果: {expensiveValue}</p>

        <button onClick={() => setCount(count + 1)}>
            count: {count}
        </button>

        <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="这里输入不会触发重计算"
        />
    </div>
}
export default Article;
