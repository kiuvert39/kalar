import { Card, Typography, List, ListItem, ListItemPrefix, Accordion, AccordionHeader, AccordionBody, Avatar, Button } from '@material-tailwind/react'
import { PresentationChartBarIcon, ShoppingBagIcon, InboxIcon, UserIcon, PowerIcon} from '@heroicons/react/24/solid'
import { ChevronDownIcon, } from "@heroicons/react/24/outline";
import {Link} from 'react-router-dom'
import { useState } from 'react';

function Sidebar() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };


  return (
    <div className='fixed left-0'>
      <Card className="h-[calc(100vh)] w-full  max-w-[20rem] p-4 shadow-xl shadow-blue-gray-400" placeholder={undefined} >
        <div className="mb-2 p-4 ml-12">
          <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="xxl" placeholder={undefined} />

        </div>

        <List placeholder={undefined}>

          <ListItem placeholder={undefined}>
            <ListItemPrefix placeholder={undefined}>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>

          <ListItem placeholder={undefined}>
            <ListItemPrefix placeholder={undefined}>
              <UserIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to="/profile_setting"> Profile</Link>
          </ListItem>

          <ListItem placeholder={undefined}>
            <ListItemPrefix placeholder={undefined}>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to="dashboard/add_new_product">
              Add Products
            </Link>
            
          </ListItem>

          <ListItem placeholder={undefined}>
            <ListItemPrefix placeholder={undefined}>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            <a href="dashboard/orders">
              Orders
            </a>
          </ListItem>

          <Accordion placeholder={undefined}
            icon={<ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`} />}
            open={open === 1}>

            <ListItem className="p-0" selected={open === 1} placeholder={undefined}>
              <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3" placeholder={undefined}>
                <ListItemPrefix placeholder={undefined}>
                  <PresentationChartBarIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" placeholder={undefined} className="mr-auto font-normal">
                  Analytics
                </Typography>
              </AccordionHeader>
            </ListItem>

            <AccordionBody className="py-1">
              <List className="p-0" placeholder={undefined}>

                <ListItem placeholder={undefined}>
                  Users
                </ListItem>

                <ListItem placeholder={undefined}>
                  login Report
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>

        </List>
              <div className='flex gap-4 ml-3 mt-5'> 
                  <PowerIcon className="h-5 w-10"/>
                  <Button color="black" placeholder={undefined} size='sm'>Log Out</Button>
              </div>
      </Card>
    </div>
  )
}

export default Sidebar;