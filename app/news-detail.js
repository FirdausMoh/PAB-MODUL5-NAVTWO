// import { Heading, Text, Center } from "@gluestack-ui/themed";
// import { Header } from "../components";
// import { useLocalSearchParams } from "expo-router";

// const NewsDetail = () => {
//   const params = useLocalSearchParams();
//   return (
//     <>
//       <Header title={"News"} withBack={true} />
//       <Center flex={1} padding={"$4"}>
//         <Heading>News Detail</Heading>
//         <Text textAlign="center">{params.title}</Text>
//       </Center>
//     </>
//   );
// };

// export default NewsDetail;


//chalenge Edit dan sesuaikan Screen News Detail 
//sehingga dapat menampilkan image, date, title dan content berdasarkan News yang diklik

import { Heading, Text, Image, ScrollView, Divider } from "@gluestack-ui/themed";
import { Header } from "../components";
import { useLocalSearchParams } from "expo-router";

const NewsDetail = () => {
  const params = useLocalSearchParams();
  return (
    <>
      <Header title={"News"} withBack={true} />
      <ScrollView>
      <Image
        width={"auto"}
        height={"25%"}
        source={{ uri: params.image}}
        alt="Image Data"
        marginBottom={"$3"}
        />
      <Text 
      marginBottom={5}
      paddingHorizontal={10}>
        {params.date}
      </Text>
      <Heading fontSize={24} 
      paddingHorizontal={10}
      lineHeight={30}>
        {params.title}
      </Heading>
      <Divider 
      my="$5" 
      alignSelf="center" 
      w={'90%'}/>
      <Text 
      paddingHorizontal={10}>
        {params.content}
        </Text>
      </ScrollView>
    </>
  );
};

export default NewsDetail;