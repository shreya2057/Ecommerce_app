import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { HiOutlineShoppingCart, HiOutlineUserCircle } from "react-icons/hi";
import { IoMdLogOut, IoMdSettings } from "react-icons/io";
import { IoHeartCircleOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";

export const Profile = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        <Box display={"flex"} gap={2}>
          <Box display={"flex"} alignSelf={"center"}>
            <HiOutlineUserCircle />
          </Box>
          <Text fontSize={"base"}>{"Shreya Shrestha"}</Text>
        </Box>
      </MenuButton>
      <MenuList>
        <MenuItem icon={<TbTruckDelivery fontSize={"20px"} />}>
          Ordered Items
        </MenuItem>
        <MenuItem icon={<HiOutlineShoppingCart fontSize={"20px"} />}>
          Carts
        </MenuItem>
        <MenuItem icon={<IoHeartCircleOutline fontSize={"20px"} />}>
          Favourite Items
        </MenuItem>
        <MenuItem icon={<IoMdSettings fontSize={"20px"} />}>Settings</MenuItem>
        <MenuItem icon={<IoMdLogOut fontSize={"20px"} />}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};
