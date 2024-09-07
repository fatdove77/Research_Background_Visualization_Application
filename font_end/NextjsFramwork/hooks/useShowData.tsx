//用于存放合约调用相关方法
import { useMemo, useEffect, useState } from 'react';
//定义的type
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { SearchScholar, SearchScholarById } from '@/request/api';
import * as echarts from 'echarts';
import { Grid, Box, Typography } from '@mui/material';
export const useShowData = () => {
  const router = useRouter()
  const [person, setPerson] = useState<any>();
  const [dataLoading, setDataLoading] = useState(false);
  const [graphLoading, setGraphLoading] = useState(false);//图加载
  const [citedGraph, setCitedGraph] = useState({
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: [],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'citations',
        type: 'bar',
        barWidth: '60%',
        data: []
      }
    ]
  })
  const [citedTable, setCitedTable] = useState({
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['all', 'since_2019',]
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
    },
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        data: ['citations', 'h_index', "i10_index"]
      }
    ],
    yAxis: [
      {
        type: 'value',

      }
    ],
    series: [
      {
        name: 'all',
        type: 'bar',
        barGap: 0,
        // 使用 labelOption 配置项，这里省略 labelOption 的定义代码
        data: []
      },
      {
        name: 'since_2019',
        type: 'bar',
        // 使用 labelOption 配置项，这里省略 labelOption 的定义代码
        data: []
      }
      // ... 其他系列
    ]
  })
  const [relatedAuthor, setRelatedAuthor] = useState([])
  const [articles, setArticles] = useState()
  const columns = [
    {
      title: 'title',
      dataIndex: 'title',
      key: 'title',
      render: (_: any, record: any) => (
        <Box
          sx={{
            maxWidth: "10rem"
          }}
        >
          <Typography variant="body1" onClick={() => {
            window.location.href = `${record?.link}`
          }}>{record?.title}</Typography>
          <Typography variant="body2">{record?.authors}</Typography>
          <Typography variant="caption">{record?.publication}</Typography>


        </Box>
      )
    },
    {
      title: 'citations',
      dataIndex: 'citations',
      key: 'citations',
      sorter: (a: any, b: any) => a?.cited_by?.value - b?.cited_by?.value,
      render: (_: any, record: any) => (
        <Typography>{record?.cited_by?.value}</Typography>
      )
    },
    {
      title: 'year',
      dataIndex: 'year',
      key: 'year',
      sorter: (a: any, b: any) => a.year - b.year
    },
  ];
  const [ccfOption, setCcfOption] = useState({
    title: {
      text: 'CCF Classification',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 0, name: 'Grade A' },
          { value: 0, name: 'Grade B' },
          { value: 0, name: 'Grade C' },
          { value: 0, name: 'out ccf' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  })


  const conferenceRankings = [
    {
      name: "[MASCOTS]IEEE International Symposium on Modeling, Analysis, and Simulation of Computer and Telecommunication Systems",
      grade: "C",
      classification: true
    },
    {
      name: "[TITS]IEEE Transactions on Intelligent Transportation Systems",
      grade: "B",
      classification: false
    },
    {
      name: "[IJCNN]International Joint Conference on Neural Networkss",
      grade: "C",
      classification: true
    },
    {
      name: "Frontiers of Computer Science",
      grade: "B",
      classification: false
    },
    {
      name: "[ICCV]International Conference on Computer Vision",
      grade: "A",
      classification: true
    },
    {
      name: "[UIC]IEEE International Conference on Ubiquitous Intelligence and Computing",
      grade: "C",
      classification: true
    },
    {
      name: "[JSA]Journal of Systems Architecture: Embedded Software Design",
      grade: "B",
      classification: false
    },
    {
      name: "IEEE Transactions on Cybernetics",
      grade: "B",
      classification: false
    },
    {
      name: "[TNNLS]IEEE Transactions on Neural Networks and learning systems",
      grade: "B",
      classification: false
    },
    // ... 其他会议和期刊
  ];


  const searchById = async (author_id: any) => {
    await SearchScholarById(author_id).then((res) => {
      console.log("google specific📝📝", JSON.parse(res));
      const result = JSON.parse(res)
      console.log(result);
      setPerson(result)
      setDataLoading(true)
    });
  }

  const getCitedGraph = async () => {
    let year: any = [];
    let citations: any = [];
    console.log("所有数据", person);
    person.cited_by.graph.map((item: any) => {
      year.push(item.year)
      citations.push(item.citations)
    })
    let temp = citedGraph;
    temp.xAxis[0].data = year
    temp.series[0].data = citations
    setCitedGraph(temp)
    // console.log("加载好的图表数据", temp);
  }

  //引用的table
  const getCitedTable = async () => {
    let option = citedTable
    const all: any = []
    const since_2019: any = []
    all.push(person.cited_by.table[0].citations.all)
    all.push(person.cited_by.table[1].h_index.all)
    all.push(person.cited_by.table[2].i10_index.all)
    since_2019.push(person.cited_by.table[0].citations.since_2019)
    since_2019.push(person.cited_by.table[1].h_index.since_2019)
    since_2019.push(person.cited_by.table[2].i10_index.since_2019)
    option.series[0].data = all
    option.series[1].data = since_2019
    console.log(option);
    setCitedTable(option)
  }


  // const getConferenceRanking = (input: any) => {
  //   for (const conference in conferenceRankings) {
  // const normalizedConference = conference.replace(/[^a-zA-Z\s]/g, ''); // 移除非字母和空格的字符
  //     const conferenceWords = normalizedConference.split(/\s+/); // 按空格分割会议名称
  //     let matchCount = 0;
  //     for (const word of conferenceWords) {
  //       if (input.includes(word)) {
  //         matchCount++;
  //       }
  //     }
  //     if (matchCount >= 3) {
  //       return conferenceRankings[conference];
  //     }
  //   }
  //   return "未找到对应会议等级";
  // }


  const getConferenceRanking = (input: string) => {
    // 转换输入为小写
    const lowerInput = input.toLowerCase();

    for (const { name, grade } of conferenceRankings) {
      // 这四个单词在计数时将被忽略
      const ignoreWords = ['ieee','transactions','systems','international', 'conference', 'on','of','in'];

      // 转换会议名称为小写
      const normalizedConference = name.toLowerCase()
        .replace(/[^a-z\s]/gi, ''); // 移除非字母和空格的字符
      const conferenceWords = normalizedConference.split(/\s+/); // 按空格分割会议名称

      let matchCount = 0;
      for (const word of conferenceWords) {
        // 跳过需要忽略的单词
        if (!ignoreWords.includes(word)) {
          const regex = new RegExp(`\\b${word}\\b`, 'i');
          if (regex.test(lowerInput)) {
            matchCount++;
          }
        }
      }

      // 当计数达到3或更多时，返回等级
      if (matchCount >= 2) {
        return grade;
      }
    }

    // 如果没有匹配，返回默认值'Z'
    return "Z";
  };

  const classifyArticle = () => {
    let temp = ccfOption;
    person.articles.map((item: any, index: number) => {
      let grade = getConferenceRanking(item.publication)
      if (grade == 'A') {
        temp.series[0].data[0].value++
      }
      if (grade == 'B') {
        temp.series[0].data[1].value++
      }
      if (grade == 'C') {
        temp.series[0].data[2].value++
      }
      if (grade == 'Z') {
        temp.series[0].data[3].value++
      }
    })
    console.log(temp);

  }
  //拿到图数据
  useEffect(() => {
    if (router.query.author_id) {
      searchById(router.query.author_id)
    }
  }, [router])

  useEffect(() => {
    if (person) {
      //文章分类
      classifyArticle()
      // 假设articles是包含您提供数据的数组
      setRelatedAuthor(person.co_authors)
      setArticles(person.articles)
      getCitedGraph()
      getCitedTable()
    }
  }, [person])

  console.log(getConferenceRanking("IEEE Transactions on Neural Networks and Learning Systems 34 (8), 5200-5205, 2021"));









  return {
    person,
    dataLoading,
    citedGraph,
    citedTable,
    columns,
    articles,
    relatedAuthor,
    ccfOption
  }

}