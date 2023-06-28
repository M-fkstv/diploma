import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Icon } from '../Icons/Icon';
import { Link } from 'react-router-dom';
import { useFooterStyles } from './footer.styles';
import { useIconStyles } from '../Icons/Icon/Icon.style';
import { useIndexStyles } from '../../../index.styles';

const MyAccordion = ({ id, title, content }) => {
  const isWideScreen = useMediaQuery('(min-width:900px)');
  const [expanded, setExpanded] = useState(isWideScreen);
  const classes = useFooterStyles();
  const handleExpand = () => {
    if (!isWideScreen) {
      setExpanded(!expanded);
    }
  };

  return (
    <Accordion
      className={classes.accordion}
      expanded={isWideScreen ? true : expanded}
      onChange={handleExpand}
      disableGutters
      id={id}
    >
      <AccordionSummary
        style={{
          flexDirection: 'row-reverse',
          paddingLeft: 0,
        }}
        expandIcon={
          isWideScreen ? null : expanded ? <RemoveIcon /> : <AddIcon />
        }
        aria-controls={`${id}-content`}
        id={`${id}-header`}
      >
        <Typography variant="h5" className={classes.subTitle}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        style={{
          paddingLeft: isWideScreen ? 0 : '35px',
        }}
      >
        <Typography>{content}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export const FooterContacts = () => {
  const iconClasses = useIconStyles();
  const classes = useFooterStyles();
  const indexClasses = useIndexStyles();

  const data = [
    {
      title: 'CUSTOMER SERVICE',
      content: [
        'CONTACT',
        'TRACK ORDER',
        'DELIVERY & RETURN',
        'PAYMENT',
        'MAKE A RETURN',
        'FAQ',
      ],
    },
    {
      title: 'INFO',
      content: [
        'GIFT VOUCHERS',
        'SIZE GUIDE',
        'CAREER AT MODNIKKY',
        'ABOUT US',
        'LEGAL POLICIES',
      ],
    },
    {
      title: 'FOLLOW US',
      content: [
        <Link to="#">
          <Icon id="#odnoklassniky" className={iconClasses.footerIcon} />
          ODNOCLASSNIKI
        </Link>,
        <Link to="#">
          <Icon id="#facebook" className={iconClasses.footerIcon} />
          FACEBOOK
        </Link>,
        <Link to="#">
          <Icon id="#instagramm" className={iconClasses.footerIcon} />
          INSTAGRAMM
        </Link>,
      ],
    },
    {
      title: 'CONTACT US',
      content: [
        'hello@modnikky.com',
        '+7 910 832 26XX',
        'Visit us at Shalalaeva 23, Bologoe, Russia',
      ],
    },
  ];

  return (
    <>
      {data.map((item, index) => {
        return (
          <MyAccordion
            id={`panel${index}a`}
            key={index}
            title={item.title}
            content={item.content.map((contentItem, contentIndex) => {
              return <li key={contentIndex}>{contentItem}</li>;
            })}
          />
        );
      })}
    </>
  );
};
