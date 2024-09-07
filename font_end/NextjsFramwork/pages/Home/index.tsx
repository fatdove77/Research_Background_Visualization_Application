import React from 'react'
import logo from '@/public/logo.jpg'
import Image from 'next/image';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import LoadingButton from '@mui/lab/LoadingButton';
import { Grid, Typography } from '@mui/material';
import cprv from '@/public/cprv.jpg'
import iclr from '@/public/iclr.jpg'
import icml from '@/public/icml.jpg'
import { useRouter } from 'next/router';
import EditNoteIcon from '@mui/icons-material/EditNote';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { useHome } from '@/hooks/useHome';
const Home: React.FC = () => {
  const {
    mySchedules
  } = useHome();
  const router = useRouter();
  return (
    <Grid
      container
      justifyContent={'center'}
      flexDirection={'column'}
    >
      <Grid
        container
        alignItems={"center"}
        sx={{
          width: '100%',
          height: '64px',
          backgroundColor: '#282828',
          padding: "1rem 1.5rem"
        }}
      >
        <CameraAltIcon
          onClick={() => {
            router.push('/Home/TakePhoto')
          }}
          sx={{
            color: '#ffffff',
            fill: '#ffffff',
            width: '3rem',
            height: '2rem',
            fontSize: '14px',
            boxSizing: 'border-box',
            borderRadius: '1.5rem',
            backgroundColor: '#8adf19',
          }}
        ></CameraAltIcon>
        <Typography
          sx={{
            color: '#ffffff',
            fontSize: '16px',
            fontFamily: 'Source Sans Pro',
            fontWeight: 500,
            lineHeight: '20px',
            marginLeft: "1rem"
          }}
        >
          识别人脸
        </Typography>
      </Grid>
      {/* 下面大盒子 */}
      <Grid
        container
        justifyContent={'center'}
        flexDirection={'column'}
        sx={{
          padding: "1rem"
        }}
      >
        <Grid
          container
        >
          <Typography
            sx={{
              color: '#030303',
              fontSize: '20px',
              fontFamily: 'Source Sans Pro',
              fontWeight: 500,
              lineHeight: '24px',
            }}
          >
            近期会议
          </Typography>
        </Grid>
        <Grid
          container
          wrap="nowrap"
          gap={"1rem"}
          sx={{
            marginTop: "1rem",
            overflowX: "auto", /* 允许在X轴上滚动 */
            scrollbarWidth: "thin", /* 让滚动条更窄 */
            scrollbarColor: " #888 #f1f1f1", /* 滚动条的颜色 */
          }}
        >
          {/* 每一个box */}
          <Grid
            container
            flexDirection={"column"}
            // justifyContent={"center"}
            alignItems={"center"}
            sx={{
              padding: ".375rem .5rem",
              minWidth: '18rem',
              height: '14.625rem',
              backgroundColor: '#ffffff',
              borderRadius: '1.5rem',
              border: '1px solid #8a8a8a',
              boxSizing: 'border-box',
            }}
          >
            <Image
              alt=""
              src={cprv}
              style={{
                width: '272px',
                height: '112px',
                borderRadius: '24px',
              }} />
            <Grid
              container
              flexDirection={"column"}
            >
              <Typography
                sx={{
                  margin: "1rem 0 0 1rem",
                  color: '#030303',
                  fontSize: '16px',
                  fontFamily: 'Source Sans Pro',
                  fontWeight: 600,
                  lineHeight: '20px',
                }}
              >
                CPRV
              </Typography>
              <Typography
                sx={{
                  margin: "0 1rem",
                  color: '#030303',
                  fontSize: '14px',
                  fontFamily: 'Source Sans Pro',
                }}
              >
                Computer Vision and Pattern Recognition Conference
              </Typography>

            </Grid>
            {/* detail 栏 */}
            <Grid
              container
              alignContent={"center"}
            >
              <Grid
                container
                alignContent={"center"}
                padding={".2rem 1rem"}
                gap={".5rem"}
              >
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <AccessTimeFilledIcon
                    sx={{
                      color: '#030303',
                      fill: '#030303',
                      fontSize: '16px',
                    }}
                  />
                </Typography>
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#030303',
                    fontSize: '14px',
                    fontFamily: 'Source Sans Pro',
                    lineHeight: '16px',
                  }}
                >
                  2024-4-24
                </Typography>
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <StarIcon
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#030303',
                      fill: '#030303',
                      fontSize: '16px',
                    }}
                  />
                </Typography>
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#030303',
                    fontSize: '14px',
                    fontFamily: 'Source Sans Pro',
                    lineHeight: '16px',
                  }}
                >
                  A
                </Typography>
                <LoadingButton
                  variant="contained"
                  sx={{
                    width: '1.2rem',
                    height: '1.2rem',
                    padding: '0px 8px',
                    border: '0',
                    boxSizing: 'border-box',
                    borderRadius: '24px',
                    backgroundColor: '#8adf19',
                    color: '#ffffff',
                    fontSize: '16px',
                    fontFamily: 'Source Sans Pro',
                    fontWeight: 500,
                    outline: 'none',
                    marginLeft: "1rem"
                  }}
                  style={{ backgroundColor: "#8adf19" }}
                >
                  详情
                </LoadingButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            flexDirection={"column"}
            // justifyContent={"center"}
            alignItems={"center"}
            sx={{
              padding: ".375rem .5rem",
              minWidth: '18rem',
              height: '14.625rem',
              backgroundColor: '#ffffff',
              borderRadius: '1.5rem',
              border: '1px solid #8a8a8a',
              boxSizing: 'border-box',
            }}
          >
            <Image
              alt=""
              src={iclr}
              style={{
                width: '272px',
                height: '112px',
                borderRadius: '24px',
              }} />
            <Grid
              container
              flexDirection={"column"}
            >
              <Typography
                sx={{
                  margin: "1rem 0 0 1rem",
                  color: '#030303',
                  fontSize: '16px',
                  fontFamily: 'Source Sans Pro',
                  fontWeight: 600,
                  lineHeight: '20px',
                }}
              >
                ICLR
              </Typography>
              <Typography
                sx={{
                  margin: "0 1rem",
                  color: '#030303',
                  fontSize: '14px',
                  fontFamily: 'Source Sans Pro',
                }}
              >
                International Conference on Learning Representations
              </Typography>

            </Grid>
            {/* detail 栏 */}
            <Grid
              container
              alignContent={"center"}
            >
              <Grid
                container
                alignContent={"center"}
                padding={".2rem 1rem"}
                gap={".5rem"}
              >
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <AccessTimeFilledIcon
                    sx={{
                      color: '#030303',
                      fill: '#030303',
                      fontSize: '16px',
                    }}
                  />
                </Typography>
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#030303',
                    fontSize: '14px',
                    fontFamily: 'Source Sans Pro',
                    lineHeight: '16px',
                  }}
                >
                  2024-5-29
                </Typography>
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <StarIcon
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#030303',
                      fill: '#030303',
                      fontSize: '16px',
                    }}
                  />
                </Typography>
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#030303',
                    fontSize: '14px',
                    fontFamily: 'Source Sans Pro',
                    lineHeight: '16px',
                  }}
                >
                  A
                </Typography>
                <LoadingButton
                  variant="contained"
                  sx={{
                    width: '1.2rem',
                    height: '1.2rem',
                    padding: '0px 8px',
                    border: '0',
                    boxSizing: 'border-box',
                    borderRadius: '24px',
                    backgroundColor: '#8adf19',
                    color: '#ffffff',
                    fontSize: '16px',
                    fontFamily: 'Source Sans Pro',
                    fontWeight: 500,
                    outline: 'none',
                    marginLeft: "1rem"
                  }}
                  style={{ backgroundColor: "#8adf19" }}
                >
                  详情
                </LoadingButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            flexDirection={"column"}
            // justifyContent={"center"}
            alignItems={"center"}
            sx={{
              padding: ".375rem .5rem",
              minWidth: '18rem',
              height: '14.625rem',
              backgroundColor: '#ffffff',
              borderRadius: '1.5rem',
              border: '1px solid #8a8a8a',
              boxSizing: 'border-box',
            }}
          >
            <Image
              alt=""
              src={icml}
              style={{
                width: '272px',
                height: '112px',
                borderRadius: '24px',
              }} />
            <Grid
              container
              flexDirection={"column"}
            >
              <Typography
                sx={{
                  margin: "1rem 0 0 1rem",
                  color: '#030303',
                  fontSize: '16px',
                  fontFamily: 'Source Sans Pro',
                  fontWeight: 600,
                  lineHeight: '20px',
                }}
              >
                icml
              </Typography>
              <Typography
                sx={{
                  margin: "0 1rem",
                  color: '#030303',
                  fontSize: '14px',
                  fontFamily: 'Source Sans Pro',
                }}
              >
                International Conference on Machine Learning
              </Typography>

            </Grid>
            {/* detail 栏 */}
            <Grid
              container
              alignContent={"center"}
            >
              <Grid
                container
                alignContent={"center"}
                padding={".2rem 1rem"}
                gap={".5rem"}
              >
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <AccessTimeFilledIcon
                    sx={{
                      color: '#030303',
                      fill: '#030303',
                      fontSize: '16px',
                    }}
                  />
                </Typography>
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#030303',
                    fontSize: '14px',
                    fontFamily: 'Source Sans Pro',
                    lineHeight: '16px',
                  }}
                >
                  2024-4-19
                </Typography>
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <StarIcon
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#030303',
                      fill: '#030303',
                      fontSize: '16px',
                    }}
                  />
                </Typography>
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#030303',
                    fontSize: '14px',
                    fontFamily: 'Source Sans Pro',
                    lineHeight: '16px',
                  }}
                >
                  A
                </Typography>
                <LoadingButton
                  variant="contained"
                  sx={{
                    width: '1.2rem',
                    height: '1.2rem',
                    padding: '0px 8px',
                    border: '0',
                    boxSizing: 'border-box',
                    borderRadius: '24px',
                    backgroundColor: '#8adf19',
                    color: '#ffffff',
                    fontSize: '16px',
                    fontFamily: 'Source Sans Pro',
                    fontWeight: 500,
                    outline: 'none',
                    marginLeft: "1rem"
                  }}
                  style={{ backgroundColor: "#8adf19" }}
                >
                  详情
                </LoadingButton>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
        <Grid
          container
        >
          <Typography
            sx={{
              color: '#030303',
              fontSize: '20px',
              fontFamily: 'Source Sans Pro',
              fontWeight: 500,
              lineHeight: '24px',
              marginTop: "2rem"
            }}
          >
            会议相关
          </Typography>
        </Grid>
        <Grid
          container
          wrap="nowrap"
          gap={"1rem"}
          sx={{
            marginTop: "1rem",
            overflowX: "auto", /* 允许在X轴上滚动 */
            scrollbarWidth: "thin", /* 让滚动条更窄 */
            scrollbarColor: " #888 #f1f1f1", /* 滚动条的颜色 */
          }}
        >
          <Grid
            onClick={() => {
              router.push("/Home/AcademicSearch")
            }}
            container
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              minWidth: '5.5rem',
              height: '5.5rem',
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              border: '1px solid #8a8a8a',
              boxSizing: 'border-box',
            }}
          >
            <EditNoteIcon
              sx={{
                color: '#030303',
                fill: '#030303',
                fontSize: '28px',
                width: '28px',
                height: '28px',
              }}
            />
            <Typography
              sx={{
                color: '#030303',
                fontSize: '12px',
                fontFamily: 'Source Sans Pro',
                fontWeight: 500,
                lineHeight: '14px',
                textAlign: 'center',
              }}
            >
              学术查询
            </Typography>
          </Grid>
          <Grid
            onClick={() => {
              router.push("/Home/AcademicSchedule")
            }}
            container
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              minWidth: '5.5rem',
              height: '5.5rem',
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              border: '1px solid #8a8a8a',
              boxSizing: 'border-box',
            }}
          >
            <EditNoteIcon
              sx={{
                color: '#030303',
                fill: '#030303',
                fontSize: '28px',
                width: '28px',
                height: '28px',
              }}
            />
            <Typography
              sx={{
                color: '#030303',
                fontSize: '12px',
                fontFamily: 'Source Sans Pro',
                fontWeight: 500,
                lineHeight: '14px',
                textAlign: 'center',
              }}
            >
              会议日程管理
            </Typography>
          </Grid>
          <Grid
            container
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              minWidth: '5.5rem',
              height: '5.5rem',
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              border: '1px solid #8a8a8a',
              boxSizing: 'border-box',
            }}
          >
            <EditNoteIcon
              sx={{
                color: '#030303',
                fill: '#030303',
                fontSize: '28px',
                width: '28px',
                height: '28px',
              }}
            />
            <Typography
              sx={{
                color: '#030303',
                fontSize: '12px',
                fontFamily: 'Source Sans Pro',
                fontWeight: 500,
                lineHeight: '14px',
                textAlign: 'center',
              }}
            >
              智能论文检索
            </Typography>
          </Grid>
          <Grid
            container
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              minWidth: '5.5rem',
              height: '5.5rem',
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              border: '1px solid #8a8a8a',
              boxSizing: 'border-box',
            }}
          >
            <EditNoteIcon
              sx={{
                color: '#030303',
                fill: '#030303',
                fontSize: '28px',
                width: '28px',
                height: '28px',
              }}
            />
            <Typography
              sx={{
                color: '#030303',
                fontSize: '12px',
                fontFamily: 'Source Sans Pro',
                fontWeight: 500,
                lineHeight: '14px',
                textAlign: 'center',
              }}
            >
              社交和网络
            </Typography>
          </Grid>
          <Grid
            container
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              minWidth: '5.5rem',
              height: '5.5rem',
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              border: '1px solid #8a8a8a',
              boxSizing: 'border-box',
            }}
          >
            <EditNoteIcon
              sx={{
                color: '#030303',
                fill: '#030303',
                fontSize: '28px',
                width: '28px',
                height: '28px',
              }}
            />
            <Typography
              sx={{
                color: '#030303',
                fontSize: '12px',
                fontFamily: 'Source Sans Pro',
                fontWeight: 500,
                lineHeight: '14px',
                textAlign: 'center',
              }}
            >
              导航与定位
            </Typography>
          </Grid>
          <Grid
            container
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              minWidth: '5.5rem',
              height: '5.5rem',
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              border: '1px solid #8a8a8a',
              boxSizing: 'border-box',
            }}
          >
            <EditNoteIcon
              sx={{
                color: '#030303',
                fill: '#030303',
                fontSize: '28px',
                width: '28px',
                height: '28px',
              }}
            />
            <Typography
              sx={{
                color: '#030303',
                fontSize: '12px',
                fontFamily: 'Source Sans Pro',
                fontWeight: 500,
                lineHeight: '14px',
                textAlign: 'center',
              }}
            >
              紧急联系
            </Typography>
          </Grid>

        </Grid>
        <Grid
          container
        >
          <Typography
            sx={{
              color: '#030303',
              fontSize: '20px',
              fontFamily: 'Source Sans Pro',
              fontWeight: 500,
              lineHeight: '24px',
              margin: "1rem 0 "
            }}
          >
            我的近期会议
          </Typography>
        </Grid>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Grid
            container
            flexDirection={"column"}
            // justifyContent={"center"}
            alignItems={"center"}
            sx={{
              padding: ".375rem .5rem",
              width: '327px',
              minHeight: '152px',
              backgroundColor: '#ffffff',
              borderRadius: '1.5rem',
              border: '1px solid #8a8a8a',
              boxSizing: 'border-box',
            }}
          >
            <Image
              alt=""
              src={cprv}
              style={{
                width: '272px',
                height: '112px',
                borderRadius: '24px',
              }} />
            <Grid
              container
              flexDirection={"column"}
            >
              <Typography
                sx={{
                  margin: "1rem 0 0 1rem",
                  color: '#030303',
                  fontSize: '16px',
                  fontFamily: 'Source Sans Pro',
                  fontWeight: 600,
                  lineHeight: '20px',
                }}
              >
                CPRV
              </Typography>
              <Typography
                sx={{
                  margin: "0 1rem",
                  color: '#030303',
                  fontSize: '14px',
                  fontFamily: 'Source Sans Pro',
                }}
              >
                Computer Vision and Pattern Recognition Conference
              </Typography>

            </Grid>
            {/* detail 栏 */}
            <Grid
              container
              alignContent={"center"}
            >
              <Grid
                container
                alignContent={"center"}
                padding={".2rem 1rem"}
                gap={".5rem"}
              >
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <AccessTimeFilledIcon
                    sx={{
                      color: '#030303',
                      fill: '#030303',
                      fontSize: '16px',
                    }}
                  />
                </Typography>
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#030303',
                    fontSize: '14px',
                    fontFamily: 'Source Sans Pro',
                    lineHeight: '16px',
                  }}
                >
                  2024-4-24
                </Typography>
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <StarIcon
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#030303',
                      fill: '#030303',
                      fontSize: '16px',
                    }}
                  />
                </Typography>
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#030303',
                    fontSize: '14px',
                    fontFamily: 'Source Sans Pro',
                    lineHeight: '16px',
                  }}
                >
                  A
                </Typography>
                <LoadingButton
                  variant="contained"
                  sx={{
                    width: '1.2rem',
                    height: '1.2rem',
                    padding: '0px 8px',
                    border: '0',
                    boxSizing: 'border-box',
                    borderRadius: '24px',
                    backgroundColor: '#8adf19',
                    color: '#ffffff',
                    fontSize: '16px',
                    fontFamily: 'Source Sans Pro',
                    fontWeight: 500,
                    outline: 'none',
                    marginLeft: "1rem"
                  }}
                  style={{ backgroundColor: "#8adf19" }}
                >
                  详情
                </LoadingButton>
              </Grid>
            </Grid>
          </Grid>
          <LoadingButton
            onClick={()=>{
              router.push("/Home/MyAllSchedules")
            }}
            variant="contained"
            sx={{
              cursor: 'pointer',
              width: '343px',
              height: '48px',
              padding: '0px 8px',
              border: '0',
              boxSizing: 'border-box',
              borderRadius: '24px',
              color: '#ffffff',
              fontSize: '16px',
              fontFamily: 'Source Sans Pro',
              fontWeight: 600,
              lineHeight: '24px',
              outline: 'none',
              marginTop: "1rem"
            }}
            style={{ backgroundColor: "#8adf19" }}
          >
            查看所有
          </LoadingButton>
          <Grid
            sx={{
              height: "10rem"
            }}></Grid>
        </Grid>
      </Grid>
    </Grid >
  )
}

export default Home