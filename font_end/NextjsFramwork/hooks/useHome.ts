import { useMemo, useEffect, useState } from 'react';
//定义的type
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { SearchScholar, SearchScholarById } from '@/request/api';
import { createContainer, useContainer } from 'unstated-next';
import { GetUserSchedules,DeleteUserSchedule } from '@/request/api';
export const useHome = () => {
  const [mySchedules, setMySchedules] = useState<[]>()
  const [loading, setLoading] = useState(true);
  //按姓名查找
  const getMySchedulesInfo = async () => {
    try {
      await GetUserSchedules().then((res) => {
        console.log(res?.data.userWithSchedules.schedules);
        setMySchedules(res?.data.userWithSchedules.schedules)
        setLoading(false)
      });
    } catch (error) {
      console.log(error);
    }
    // const result = await SearchScholarById()
    // console.log(result)
  };

  const deleteSchedule = async (id:string)=>{
    try {
      await DeleteUserSchedule(id).then((res)=>{
        if(res){
          getMySchedulesInfo()
          toast.success("delete successfully")
        }
      })
      
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getMySchedulesInfo()
  }, [])

  return {
    loading,
    mySchedules,
    deleteSchedule,
  }
}