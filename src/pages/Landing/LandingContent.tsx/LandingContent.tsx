import { Avatar, Box, Container, Divider, Grid, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Skeleton, Typography } from "@mui/material";
import Illustration from "/assets/Illustration.png";
import Image from "/assets/Image.png";
import p01 from "/assets/p01.png";
import p02 from "/assets/p02.png";
import p03 from "/assets/p03.png";
import p04 from "/assets/p04.png";
import p05 from "/assets/p05.png";
import p06 from "/assets/p06.png";
import Doctor01 from "/assets/Doctor01.png";
import Doctor02 from "/assets/Doctor02.png";
import Doctor03 from "/assets/Doctor03.png";
import Doctor04 from "/assets/Doctor04.png";
import History from "/assets/History.png";
import { TextBox, YellowText, IllustrationEle, BigTextBlack, BigTextWhite, SmallTextBlack, SmallTextWhite, TextBox2, BoxText, PopUp, PopUpContent, Close, SpecialText, WhiteTextSpan, HistoryEle } from "./Style";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EventIcon from '@mui/icons-material/Event';
import GroupIcon from '@mui/icons-material/Group';
import React, { useEffect, useState } from "react";
import axios from "@/config/axios";
import { API_ENDPOINTS } from "@/utils/api";
import Logo from "@/components/Logo";
import { ImageEle } from "./Style";
import { Demo } from "./Style";
import GppGoodIcon from '@mui/icons-material/GppGood';
import themes from "@/config/themes";

export type BranchProps = {
    avt: string;
    name: string;
    phone: string;
    email: string;
    mngName: string;
}

export type DentistsProp = {
    avt: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    gender: boolean;
}

export type StaffProp = {
    avt: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    gender: boolean;
}

const provide1 = [
    { title: 'Check ups', },
    { title: 'Cosmetic dentistry', },
    { title: 'Orthodontics', },
    { title: 'Preventative checks', },
];

const provide2 = [
    { title: 'Emergencys', },
    { title: 'Dental implants', },
    { title: 'Childrens dentistry', },
    { title: 'Telephone consultations', },
];

const provide3 = [
    { img: p01, title: 'Laser Technology', description: 'Worlds most advanced Diode Laser. Your treatment experience will be relaxing & smooth.' },
    { img: p02, title: 'Painless Injection', description: 'Only dental clinic in New York, USA utilising Painless Injection system. You will be amazed!' },
    { img: p03, title: 'Dental Implant', description: '30+ years of experience in Dental Implant with specialist care. You will be able to chew properly again!' },
    { img: p04, title: '3D Dental Scanner ', description: 'One of the world’s most advanced 3D Dental Scanner with auto scanning only one in New York!' },
    { img: p05, title: 'Digital Smile Design', description: 'We help to re-design your smile and shape your teeth to create a customised smile for your face!' },
    { img: p06, title: 'Crown and Bridge', description: 'Transform you blackish gum to pinkish colour with painless, single appointment Laser Gum Treatment' },
];

const data = [
    {
        src: Doctor01,
        title: 'Dr. Jeanette Hoff',
        channel: 'Don Diablo',
        role: 'Orthodontic Treatment ',
        certificate: 'Yale Medical School',
    },
    {
        src: Doctor02,
        title: 'Dr. David Ambrose',
        channel: 'Queen Official',
        role: 'Orthodontic Treatment ',
        certificate: 'Harvard Medical School',
    },
    {
        src: Doctor03,
        title: 'Dr. Jenelia Breton',
        channel: 'Calvin Harris',
        role: 'Orthodontic Treatment ',
        certificate: 'Oxford Medical School',
    },
    {
        src: Doctor04,
        title: 'Dr. Jagajeet Aurora',
        channel: 'Calvin Harris',
        role: 'Orthodontic Treatment ',
        certificate: 'Harvard Medical School',
    },
];

function LandingContent() {

    const [showBranchPhones, setShowBranchPhones] = useState(false);
    const [showDentistList, setShowDentistList] = useState(false);
    const [showStaffList, setShowStaffList] = useState(false);

    const [branchs, setBranchs] = useState<BranchProps[]>([]);
    const [dentists, setDentist] = useState<DentistsProp[]>([]);
    const [staffs, setStaff] = useState<StaffProp[]>([]);

    const getListBranch = async () => {
        const res = await axios.get(API_ENDPOINTS.BRANCH.LIST);
        return setBranchs(res.data.data.list);
    }
    useEffect(() => {
        getListBranch();
    }, []);

    const getListDentist = async () => {
        const res = await axios.get(API_ENDPOINTS.USERS.LIST_DENTIST);
        return setDentist(res.data.data.list);
    }
    useEffect(() => {
        getListDentist();
    }, []);

    const getListStaff = async () => {
        const res = await axios.get(API_ENDPOINTS.USERS.LIST_STAFF);
        return setStaff(res.data.data.list);
    }

    useEffect(() => {
        getListStaff();
    }, []);

    const handleShowBranchPhone = () => {
        setShowBranchPhones(true);
    }

    const handleShowStaffList = () => {
        setShowStaffList(true);
    }

    const handleShowDentistList = () => {
        setShowDentistList(true);
    }

    const handleClosePopup = () => {
        setShowBranchPhones(false);
        setShowDentistList(false);
        setShowStaffList(false);
    }

    return (
        <Box>
            {/* Content 1 */}
            <Container className="LandingContent1" >
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mt: 5
                }}>
                    <TextBox>
                        <BigTextBlack>
                            We Provide High <br />
                            Quality <YellowText>Dental</YellowText> Services
                        </BigTextBlack>
                        <SmallTextBlack>
                            Appropriately embrace transparent materials via <br />
                            turnkey niche markets.
                        </SmallTextBlack>
                    </TextBox>
                    <IllustrationEle>
                        <img src={Illustration} alt="Illustration" />
                    </IllustrationEle>
                </Box>
            </Container>
            {/* Content 2 */}
            <Box
                sx={{
                    display: 'flex',
                    backgroundColor: '#516EFF',
                    mt: 10,
                    height: '200px',
                }}>
                <Container sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <TextBox>
                        <BigTextWhite>
                            How to get our service?
                        </BigTextWhite>
                        <SmallTextWhite>
                            Just follow these simple steps
                        </SmallTextWhite>
                    </TextBox>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 5,
                            alignItems: 'center',
                        }}>
                        {/* Click to show list branch phone number */}
                        <TextBox2
                            sx={{
                                maxWidth: '50px',
                            }}
                            onClick={handleShowBranchPhone}>
                            <LocalPhoneIcon sx={{
                                fontSize: '2.5rem',
                                color: (theme) => theme.palette.primary.light,
                            }} />
                            <BoxText
                                sx={{
                                    fontWeight: 700,
                                    fontSize: '0.8rem',
                                }}>
                                Call for <br />
                                <span style={{ fontWeight: 'bold' }}>APPOINTMENT</span>
                            </BoxText>
                        </TextBox2>
                        {/* Click to move to booking screen */}
                        <TextBox2
                            onClick={handleShowStaffList}>
                            <GroupIcon sx={{
                                fontSize: '2.5rem',
                                color: (theme) => theme.palette.primary.light,
                            }} />
                            <BoxText>
                                Meet our <br />
                                <span style={{ fontWeight: 'bold' }}>STAFF</span>
                            </BoxText>
                        </TextBox2>
                        {/* Click to show list dentist */}
                        <TextBox2
                            onClick={handleShowDentistList}>
                            <GroupIcon sx={{
                                fontSize: '2.5rem',
                                color: (theme) => theme.palette.primary.light,
                            }}
                            />
                            <BoxText>
                                Meet our <br />
                                <span style={{ fontWeight: 'bold' }}>DENTIST</span>
                            </BoxText>
                        </TextBox2>
                    </Box>
                </Container>
            </Box>
            {showBranchPhones &&
                <PopUp>
                    <PopUpContent>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                            <Logo />
                            <Close onClick={handleClosePopup} >
                                &times;
                            </Close>
                        </Box>
                        <Box sx={{
                            overflow: 'auto',
                        }}>
                            {branchs.map((branch, index) => (
                                <List sx={{ width: '100%', maxWidth: 360 }}>
                                    <ListItem alignItems="flex-start" key={index}>
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={`${branch.name}`}
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        Phone Number: <span style={{ fontWeight: 700 }}>{branch.phone}</span>
                                                    </Typography>
                                                    <br />
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        Email:  <span style={{ fontWeight: 700 }}>{branch.email}</span>
                                                    </Typography>
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </List>
                            ))}
                        </Box>
                    </PopUpContent>
                </PopUp>}
            {showStaffList &&
                <PopUp>
                    <PopUpContent>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                            <Logo />
                            <Close onClick={handleClosePopup} >
                                &times;
                            </Close>
                        </Box>
                        <Box sx={{
                            overflow: 'auto',
                        }}>
                            {staffs.map((staff, index) => (
                                <List sx={{ width: '100%', maxWidth: 360 }}>
                                    <ListItem alignItems="flex-start" key={index}>
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={`${staff.firstName} ${staff.lastName}`}
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        Phone Number: <span style={{ fontWeight: 700 }}>{staff.phone}</span>
                                                    </Typography>
                                                    <br />
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        Email:  <span style={{ fontWeight: 700 }}>{staff.email}</span>
                                                    </Typography>
                                                    <br />
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        Gender: <span style={{ fontWeight: 700 }}>
                                                            {staff.gender ? 'Male' : 'Female'}
                                                        </span>
                                                    </Typography>
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </List>
                            ))}
                        </Box>
                    </PopUpContent>
                </PopUp>}
            {showDentistList &&
                <PopUp>
                    <PopUpContent>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                            <Logo />
                            <Close onClick={handleClosePopup} >
                                &times;
                            </Close>
                        </Box>
                        <Box sx={{
                            overflow: 'auto',
                        }}>
                            {dentists.map((dentist, index) => (
                                <List sx={{ width: '100%', maxWidth: 360 }}>
                                    <ListItem alignItems="flex-start" key={index}>
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={`${dentist.firstName} ${dentist.lastName}`}
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        Phone Number: <span style={{ fontWeight: 700 }}>{dentist.phone}</span>
                                                    </Typography>
                                                    <br />
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        Email:  <span style={{ fontWeight: 700 }}>{dentist.email}</span>
                                                    </Typography>
                                                    <br />
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        Gender: <span style={{ fontWeight: 700 }}>
                                                            {dentist.gender ? 'Male' : 'Female'}
                                                        </span>
                                                    </Typography>
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </List>
                            ))}
                        </Box>
                    </PopUpContent>
                </PopUp>}
            {/* Content 3 */}
            <Container>
                <Grid container spacing={2} sx={{ mt: 10, }}>
                    <Grid item xs={6} sx={{
                        borderBottom: '1px solid #516EFF',
                        pb: 5,
                    }}>
                        <BigTextBlack>
                            Always <YellowText>Lough</YellowText> <br />
                            Whenever Its Possible
                        </BigTextBlack>
                    </Grid>
                    <Grid item xs={6} sx={{
                        borderBottom: '1px solid #52525B',
                        display: 'flex',
                        alignItems: 'center',
                        pb: 5,
                    }}>
                        <SmallTextBlack>
                            We also offer treatments that improve the appearance of your smile <br />
                            giving you the confidence boost you deserve. The process or our <br />
                            treatment below.
                        </SmallTextBlack>
                    </Grid>
                    <Grid item xs={6}>
                        <ImageEle>
                            <img src={Image} alt="Image" />
                        </ImageEle>
                    </Grid>
                    <Grid item xs={6} sx={{
                        mt: 5
                    }}>
                        <Typography sx={{ mt: 4, mb: 2, }} variant="h6" component="div">
                            WHAT WE PROVIDE
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={6} >
                                <Demo >
                                    <List>
                                        {provide1.map((item, index) =>
                                            <ListItem sx={{ pl: 0 }} key={index}>
                                                <ListItemIcon>
                                                    <GppGoodIcon sx={{ color: 'lightgray' }} />
                                                </ListItemIcon>
                                                <ListItemText >
                                                    {item.title}
                                                </ListItemText>
                                            </ListItem>,
                                        )}
                                    </List>
                                </Demo>
                            </Grid>
                            <Grid item xs={6}>
                                <Demo>
                                    <List sx={{ position: 'absolute' }}>
                                        {provide2.map((item, index) =>
                                            <ListItem sx={{ pl: 0 }} key={index}>
                                                <ListItemIcon>
                                                    <GppGoodIcon sx={{ color: 'lightgray' }} />
                                                </ListItemIcon>
                                                <ListItemText >
                                                    {item.title}
                                                </ListItemText>
                                            </ListItem>,
                                        )}
                                    </List>
                                </Demo>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            {/* Content 4 */}
            <Container sx={{ pt: 10 }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <BigTextBlack>
                        What Makes Us More
                    </BigTextBlack>
                    <SpecialText>KEY <YellowText>FEATURE</YellowText></SpecialText>
                </Box>
                <Box sx={{
                    display: 'flex',
                }}>
                    <SpecialText>Special</SpecialText>
                    <Divider sx={{
                        borderBottom: '1px solid lightgray',
                        flexGrow: 1,
                        marginLeft: '10px',
                        mb: 3
                    }} />
                </Box>
                <Grid container spacing={7} sx={{ pt: 7 }}>
                    {provide3.map((item, index) =>
                        <Grid item xs={4} key={index}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 2,
                                border: '1px solid lightgray',
                                backgroundColor: '#F8FAFC',
                                maxHeight: '250px',
                                padding: '20px',
                                borderRadius: '10px',
                            }}>
                                <img src={item.img} alt="Image" />
                                <Typography sx={{ fontWeight: 700, }}>
                                    {item.title}
                                </Typography>
                                <Typography sx={{ textAlign: 'center', color: (theme) => theme.palette.text.secondary }}>
                                    {item.description}
                                </Typography>
                            </Box>
                        </Grid>,
                    )}
                </Grid>
            </Container>
            {/* Content 5 */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#516EFF',
                    mt: 10,
                    height: '250px',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <SmallTextWhite sx={{ fontSize: 25 }}>Let Us Brighten <WhiteTextSpan>Your Smile!</WhiteTextSpan></SmallTextWhite>
                <Typography sx={{
                    pt: 2,
                    maxWidth: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    color: 'white',
                    fontSize: '0.8rem',
                }}>Helping patients achieve good dental health & beautiful smile is a privilege & responsibility. For over 30 years, we proudly provided the best dental experience in New York. Our comfort-first approach is designed to meet the needs of you & your entire family.</Typography>
            </Box>
            {/* Content 6 */}
            <Container sx={{ pt: 10 }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <SpecialText>WHO <YellowText>WE ARE</YellowText></SpecialText>
                    <BigTextBlack>
                        Our Glorious
                    </BigTextBlack>

                </Box>
                <Box sx={{
                    display: 'flex',
                }}>
                    <Divider sx={{
                        borderBottom: '1px solid lightgray',
                        flexGrow: 1,
                        marginRight: '10px',
                        mb: 3
                    }} />
                    <SpecialText>History</SpecialText>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <HistoryEle>
                            <img src={History} alt="History" />
                        </HistoryEle>
                    </Grid>
                    <Grid item xs={6} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Box sx={{
                            backgroundColor: '#F8FAFC',
                            p: 5,
                            borderRadius: '10px',
                        }}>
                            <Typography sx={{ fontWeight: 700, fontSize: '1.5rem', pb: 2 }}>
                                Our History
                            </Typography>
                            <Typography sx={{
                                color: (theme) => theme.palette.text.secondary,
                                letterSpacing: '0.64px',
                            }}>
                                Dentics is a well-known name in dental and oral care in New York. The journey of this institution started in 1990 under the hands of Dr. Jonathon Doe, Gold Medalist of Harvard University. Dentics dental center has been leading the way in dental treatment in USA for more than 30 years in keeping with the evolution of time and the modernization of the era.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            {/* Content 7 */}
            <Box sx={{
                backgroundColor: '#F8FAFC',
                mt: 5
            }}>
                <Container sx={{ pt: 5, pb: 5 }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <BigTextBlack>
                            Meet Some of Our
                        </BigTextBlack>
                        <SpecialText>OUR FOUNDING <YellowText>DOCTORS</YellowText></SpecialText>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                    }}>
                        <SpecialText>Brains</SpecialText>
                        <Divider sx={{
                            borderBottom: '1px solid lightgray',
                            flexGrow: 1,
                            marginLeft: '10px',
                            mb: 3
                        }} />
                    </Box>
                    <Grid container wrap="nowrap" sx={{
                        display: 'flex',
                        overflow: 'auto',
                        pb: 5,
                        pt: 5,
                        justifyContent: 'space-between',
                        alignContent: 'center',
                        alignItems: 'center',
                    }}>
                        {(false ? Array.from(new Array(4)) : data).map((item, index) => (
                            <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
                                {item ? (
                                    <img
                                        style={{ width: '100%', height: '100%' }}
                                        alt={item.title}
                                        src={item.src}
                                    />
                                ) : (
                                    <Skeleton variant="rectangular" width={210} height={118} />
                                )}
                                {item ? (
                                    <Box sx={{
                                        pr: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Typography gutterBottom variant="body2" sx={{ fontWeight: 700 }}>
                                            {item.title}
                                        </Typography>
                                        <Typography display="block" variant="caption" color="text.secondary">
                                            {item.role}
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            {item.certificate}
                                        </Typography>
                                    </Box>
                                ) : (
                                    <Box sx={{ pt: 0.5 }}>
                                        <Skeleton />
                                        <Skeleton width="60%" />
                                    </Box>
                                )}
                            </Box>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </Box >
    );
}

export default LandingContent;