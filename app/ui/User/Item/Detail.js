import React from "react";
import { Box, Button, HStack, Image, VStack, Text, Divider } from "native-base";
import { PostListGrid } from "../../Post";
import RelationshipCreateButton from "../Relationship/Create/Button";
import RelationshipUpdateButton from "../Relationship/Update/Button";
import RelationshipDeleteButton from "../Relationship/Delete/Button";
import RelationshipDeleteCancel from "../Relationship/Delete/Cancel";
import RelationshipDeleteFriend from "../Relationship/Delete/Friend";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

function UI() {
  return (
    <VStack maxW="900" mx="auto" my="5" w="100%" space="4">
      {/* Personal Detail */}
      <HStack space="7" m="1%" alignItems="center">
        <Box>
          <Image
            source={{
              uri:
                "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719777/200960556_1184264562021915_3530694902678239694_n_u7mk8s.jpg",
            }}
            alt="Alternate Text"
            w="120"
            h="120"
            rounded="100"
          />
        </Box>
        <VStack flex="1" space="3">
          <HStack space="2">
            <Text fontSize="22" fontWeight="600">
              Nguyễn Kim Huy
            </Text>
            <Button bgColor="transparent" p="2" color="gray.500">
              <HiOutlineDotsHorizontal />
            </Button>
          </HStack>

          <HStack space="4">
            <Text fontSize="14" color="gray.500">
              12 bài đăng
            </Text>
            <Text fontSize="14" color="gray.500">
              144 bạn bè
            </Text>
          </HStack>

          {/* <HStack space="2" alignItems="center">
            <Text mr="4" fontSize="15" fontWeight="600" color="gray.500">
              Bạn có quen Nguyễn Kim Huy không?
            </Text>
            <Box w="120px">
              <RelationshipCreateButton />
            </Box>
          </HStack> */}

          {/* <HStack space="2" alignItems="center">
            <Text mr="4" fontSize="15" fontWeight="600" color="gray.500">
              Bạn đã gửi lời mời kết bạn cho Nguyễn Kim Huy
            </Text>
            <Box w="100px">
              <RelationshipDeleteCancel />
            </Box>
          </HStack> */}

          {/* <HStack space="2" alignItems="center">
            <Text mr="4" fontSize="15" fontWeight="600" color="gray.500">
              Nguyễn Kim Huy đã gửi lời mời kết bạn
            </Text>
            <Box w="100px">
              <RelationshipUpdateButton />
            </Box>
            <Box w="60px">
              <RelationshipDeleteButton />
            </Box>
          </HStack> */}

          <HStack space="2" alignItems="center">
            <Text mr="4" fontSize="15" fontWeight="600" color="gray.500">
              Bạn và Nguyễn Kim Huy là bạn bè
            </Text>
            <Box w="100px">
              <RelationshipDeleteFriend />
            </Box>
          </HStack>
        </VStack>
      </HStack>

      <VStack space="2" m="1%">
        <Text fontSize="18" fontWeight="600" color="green.500">
          Giới thiệu
        </Text>
        <Divider bg="gray.100" w="100%" my="1" orientation="horizontal" />
        <Text fontSize="14" fontWeight="400" color="gray.600" lineHeight="26px">
          👋 Tôi tên là Nguyễn Kim Huy <br></br>📚 Tôi đang tìm hiểu về du lịch
          <br></br>
          🛩 Thích đi du lịch bằng máy bay
        </Text>
      </VStack>

      {/* Personal Post */}
      <Box>
        <VStack w="98%" space="2" m="1%">
          <Text fontSize="18" fontWeight="600" color="green.500">
            Bài viết
          </Text>
          <Divider bg="gray.100" w="100%" my="1" orientation="horizontal" />
        </VStack>
        <PostListGrid />
      </Box>
    </VStack>
  );
}
export default UI;