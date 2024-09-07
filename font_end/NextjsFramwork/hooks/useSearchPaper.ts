import { useMemo, useEffect, useState } from 'react';
//定义的type
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { SearchScholar, SearchScholarById } from '@/request/api';
import { createContainer, useContainer } from 'unstated-next';
export const useSearchPaper = () => {
  const [info,setInfo] = useState<[]>()
   //按姓名查找
   const searchName = async (input:string) => {
    console.log("搜索内容", input);
    await SearchScholar(input).then((res) => {
      console.log("google scholar📝📝", JSON.parse(res));
      const result = JSON.parse(res)
      setInfo(result?.organic_results)
    });

    // const result = await SearchScholarById()
    // console.log(result)
  };

  return {
    info,
    searchName
  }

}