import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Add, Remove } from '@mui/icons-material';
import { useMediaQuery } from '@mui/material';

import { Icon } from '../Icons/Icon';

import { useFooterStyles } from '../Footer/footer.styles';
import { useIconStyles } from '../Icons/Icon/Icon.style';

export default function SimpleAccordion() {
  const classes = useFooterStyles();
  const iconClasses = useIconStyles();

  const isWideScreen = useMediaQuery('(min-width:800px)');
  const [expanded, setExpanded] = useState(isWideScreen);

  const handleExpand = (id) => {
    if (!isWideScreen) {
      setExpanded(!expanded);
    }
  };

  return (
    <div className={classes.body}>
      <Accordion
        expanded={isWideScreen ? true : expanded}
        onChange={handleExpand}
        id={'panel1a'}
        className={classes.accordion}>
        <AccordionSummary
          style={{
            padding: 0,
          }}
          expandIcon={isWideScreen ? null : expanded ? <Remove /> : <Add />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography variant="h5" className={classes.subTitle}>
            CUSTOMER SERVICE
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            padding: 0,
          }}>
          <Typography>
            <li>CONTACT</li>
            <li>TRACK ORDER</li>
            <li>DELIVERY & RETURN</li>
            <li>PAYMENT</li>
            <li>MAKE A RETURN</li>
            <li>FAQ</li>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={isWideScreen ? true : expanded}
        onChange={handleExpand}
        id={'panel2a'}
        className={classes.accordion}
        // style={{
        //   boxShadow: 'none',
        //   margin: 0,
        //   // backGroundColor: '#ffffff', // TODO add to :before
        // }}
      >
        <AccordionSummary
          style={{
            padding: 0,
          }}
          expandIcon={isWideScreen ? null : expanded ? <Remove /> : <Add />}
          aria-controls="panel2a-content"
          id="panel2a-header">
          <Typography variant="h5" className={classes.subTitle}>
            INFO
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            padding: 0,
          }}>
          <Typography>
            <li>GIFT VOUCHERS</li>
            <li>SIZE GUIDE</li>
            <li>CAREER AT MODNIKKY</li>
            <li>ABOUT US</li>
            <li>LEGAL POLICIES</li>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={isWideScreen ? true : expanded}
        onChange={handleExpand}
        id={'panel3a'}
        className={classes.accordion}
        // style={{
        //   boxShadow: 'none',
        //   margin: 0,
        // }}
      >
        <AccordionSummary
          style={{
            padding: 0,
          }}
          expandIcon={isWideScreen ? null : expanded ? <Remove /> : <Add />}
          aria-controls="panel3a-content"
          id="panel3a-header">
          <Typography variant="h5" className={classes.subTitle}>
            FOLLOW US
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            padding: 0,
          }}>
          <Typography>
            <li>
              <Link to="#">
                <Icon id="#facebook" className={iconClasses.footerIcon} />{' '}
                FACEBOOK
              </Link>
            </li>
            <li>
              <Link to="#">
                <Icon id="#odnoklassniky" className={iconClasses.footerIcon} />{' '}
                ODNOCLASSNIKI
              </Link>
            </li>
            <li>
              <Link to="#">
                <Icon id="#instagramm" className={iconClasses.footerIcon} />{' '}
                INSTAGRAMM
              </Link>
            </li>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={isWideScreen ? true : expanded}
        onChange={handleExpand}
        id={'panel4a'}
        className={classes.accordion}
        // style={{
        //   boxShadow: 'none',
        //   margin: 0,
        //   padding: 0,
        // }}
      >
        <AccordionSummary
          expandIcon={isWideScreen ? null : expanded ? <Remove /> : <Add />}
          style={{
            padding: 0,
          }}
          aria-controls="panel4a-content"
          id="panel4a-header">
          <Typography variant="h5" className={classes.subTitle}>
            CONTACT US
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            padding: 0,
          }}>
          <Typography>
            <li>hello@modnikky.com</li>
            <li>+7 910 832 26XX</li>
            <li>
              Visit us at Shalalaeva 23,
              <br /> Bologoe, Russia
            </li>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
