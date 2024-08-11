import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';

const PrivacyPolicy = () => {
    const DATA = [
        { id: '1', listheading: 'What Data We Get', content: 'We collect certain data from you directly, like information you enter yourself, data about your consumption of content, and data from third-party platforms you connect with Udemy. We also collect some data automatically, like information about your device and what parts of our Services you interact with or spend time using. All data listed in this section is subject to the following processing activities: collecting, recording, structuring, storing, altering, retrieving, encrypting, pseudonymizing, erasing, combining, and transmitting.' },
        { id: '2', listheading: 'How We Get Data About You', content: 'We use tools like cookies, web beacons, and similar tracking technologies to gather the data listed above. Some of these tools offer you the ability to opt out of data collection.' },
        { id: '3', listheading: 'What We Use Your Data For', content: 'We use your data to do things like provide our Services, communicate with you, troubleshoot issues, secure against fraud and abuse, improve and update our Services, analyze how people use our Services, serve personalized advertising, and as required by law or necessary for safety and integrity. We retain your data for as long as it is needed to serve the purposes for which it was collected.' },
        { id: '4', listheading: 'Who We Share Your Data With', content: 'We share certain data about you with instructors, other students, companies performing services for us, Udemy affiliates, our business partners, analytics and data enrichment providers, your social media providers, companies helping us run promotions and surveys, and advertising companies who help us promote our Services. We may also share your data as needed for security, legal compliance, or as part of a corporate restructuring. Lastly, we can share data in other ways if it is aggregated or de-identified or if we get your consent.' },
        { id: '5', listheading: 'Security', content: 'We use appropriate security based on the type and sensitivity of data being stored. As with any internet-enabled system, there is always a risk of unauthorized access, so it’s important to protect your password and to contact us if you suspect any unauthorized access to your account.' },
        { id: '6', listheading: 'Your Rights', content: 'You have certain rights around the use of your data, including the ability to opt out of promotional emails, cookies, and collection of your data by certain third parties. You can update or terminate your account from within our Services, and can also contact us for individual rights requests about your personal data. Parents who believe we’ve unintentionally collected personal data about their underage child should contact us for help deleting that information.' },
        { id: '7', listheading: 'Jurisdiction-Specific Rules', content: 'If you live in California, you have certain rights related to accessing and deleting your data, as well as learning who we share your data with. If you live in Australia, you have the right to make a formal complaint with the appropriate government agency. Users outside of the United States should note that we transfer data to the US and other areas outside of the European Economic Area.' },
        { id: '8', listheading: 'Updates & Contact Info', content: 'When we make a material change to this policy, we’ll notify users via email, in-product notice, or another mechanism required by law. Changes become effective the day they’re posted. Please contact us via email or postal mail with any questions, concerns, or disputes.' },
      ];

  return (
    <View style={styles.container}>
      <View style={styles.textcontainer}>
        <Text style={styles.textHeader}>Privacy Policy</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({item, index}) => (
          <View style={styles.contentView}>
            <Text style={styles.contentHeader}>{`${index + 1}. ${item.listheading}`}</Text>
            <Text style={styles.contentText}>{item.content}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        //   keyExtractor={item => item.id}
      />
    </View>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  contentHeader: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  contentText: {
    fontSize: 17,
    color: 'black',
    fontWeight: 'light',
    textAlign: 'justify',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 20,
    marginVertical: 20,
  },
  textcontainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 25,
    fontWeight: 'light',
    color: 'gray',
  },
});
