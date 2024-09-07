//用于存放合约调用相关方法
import { useMemo, useEffect, useState } from 'react';
//定义的type
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { SearchScholar, SearchScholarById } from '@/request/api';
import { createContainer, useContainer } from 'unstated-next';
const useGetProfile = () => {
  const [scholarData, setScholarData] = useState(null);
  const [profile, setProfile] = useState([]);
  const [loading,setLoading] = useState(true)
  const router = useRouter()

  //按姓名查找
  const searchName = async () => {
    const queryData = JSON.parse((router?.query?.data || "[]") as string) ?? "";
    console.log("人脸识别的姓名：", queryData.name);
    await SearchScholar(queryData?.name).then((res) => {
      console.log("google scholar📝📝", JSON.parse(res));
      const result = JSON.parse(res)
      setProfile(result?.profiles.authors)
      setLoading(false);
    });

    // const result = await SearchScholarById()
    // console.log(result)
  };

  const jumpToDetail = async (author_id: string) => {
    // let data = "";
    // console.log("author+_id",author_id);
    // await SearchScholarById(author_id).then((res) => {
    //   console.log("google specific📝📝", JSON.parse(res));
    //   const result = JSON.parse(res)
    //   data = result;
    // });
    router.push({
      pathname: "PersonPage",
      query: {
        author_id: author_id
      }
    })
  }

  useEffect(() => {
    console.log(router.query);
    // const queryData = JSON.parse((router?.query?.data ?? "[]") as string)??"";
    // console.log(queryData);
    if (router.query.data) {
      searchName();
    }
  }, [router]);

  return {
    profile,
    scholarData,
    jumpToDetail,
    searchName,
    loading
  }

}
export default createContainer(useGetProfile)

