import { useMemo, useEffect, useState } from 'react';
//定义的type
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { SearchScholar, SearchScholarById } from '@/request/api';
import { createContainer, useContainer } from 'unstated-next';
import { GetAllSchedules, AddUserSchedule } from '@/request/api';
export const useSchedule = () => {
  const [schedules, setSchedules] = useState<[]>()
  //按姓名查找
  const getSchedulesInfo = async () => {
    try {
      await GetAllSchedules().then((res) => {
        console.log(res);
        setSchedules(res?.data.schedules)
      });
    } catch (error) {
      console.log(error);
    }
    // const result = await SearchScholarById()
    // console.log(result)
  };

  const addSchedule = async (id: string) => {
    try {
      await AddUserSchedule(id).then((res) => {
        console.log(res);
        if (res) {
          toast.success(res?.message)
        }
      })
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getSchedulesInfo()
  }, [])

  return {
    schedules,
    addSchedule
  }
}