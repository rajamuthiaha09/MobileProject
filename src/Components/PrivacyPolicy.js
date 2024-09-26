import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants/themes';
import { CommonHeader } from './sharedComponents';

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

  const tableData = [
    {
      id: 1,
      category: 'System Data',
      description: 'Technical data about your computer or device, like your IP address, device type, operating system type and version, unique device identifiers, browser, browser language, domain and other systems data, and platform types.',
      legalBasis: ['Performance of contract','Legitimate interests (service provisioning, customer and technical support, fraud prevention and security, communication, product improvement)',],
    },
    {
      id: 2,
      category: 'Usage Data',
      description: 'Usage statistics about your interactions with the Services, including content accessed, time spent on pages or the Service, pages visited, features used, your search queries, click data, date and time, referrer, and other data regarding your use of the Services.',
      legalBasis: ['Legitimate interests (service provisioning, user experience improvement, product improvement)',],
    },
    {
      id: 3,
      category: 'Approximate Geographic Data',
      description: 'An approximate geographic location, including information like country, city, and geographic coordinates, calculated based on your IP address.',
      legalBasis: ['Legitimate interests (user experience improvement, fraud prevention and security, compliance)',],
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <View style={styles.cell}>
        <Text style={styles.categoryText}>{item.category}</Text>
      </View>
      <View style={styles.cell}>
        <Text style={styles.descriptionText}>{item.description}</Text>
      </View>
      <View style={styles.cell}>
        {item.legalBasis.map((basis, index) => (
          <Text key={index} style={styles.legalText}>
            {basis}
          </Text>
        ))}
      </View>
    </View>
  );

  const renderDataItem = ({ item, index }) => (
    <View>
      <View style={styles.contentView}>
        <Text style={styles.contentHeader}>{`${index + 1}. ${item.listheading}`}</Text>
        <Text style={styles.contentText}>{item.content}</Text>
      </View>
      {index === 0 && (
        <View style={styles.containerss}>
          <View style={styles.headerRow}>
            <Text style={styles.headerText}>Category of Personal Data</Text>
            <Text style={styles.headerText}>Description</Text>
            <Text style={styles.headerText}>Legal Basis for Processing</Text>
          </View>
          <FlatList 
            data={tableData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.table}
          />
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <CommonHeader showHeader={true} sectionHeaderTitle="Privacy Policy" showBackIcon={true} />
      <View style={[{ margin: SIZES.margin_20 }]}>
        <FlatList
          data={DATA}
          renderItem={renderDataItem}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View style={{margin: 20}}></View>}
        />
      </View>
    </View>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentHeader: {
    color: COLORS.$black,
    fontSize: SIZES.sz_20_font,
    fontWeight: 'bold',
  },
  contentText: {
    fontSize: SIZES.sz_17_font,
    color: COLORS.$black,
    textAlign: 'justify',
    borderColor: COLORS.$gray,
    borderWidth: 1,
    padding: SIZES.padding_20,
    marginVertical: SIZES.margin_20,
  },
  containerss: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  table: {
    borderWidth: 1,
    borderColor: '#ccc',
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    padding: 10,
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 10,
  },
  cell: {
    flex: 1,
    padding: 5,
  },
  categoryText: {
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 12,
  },
  legalText: {
    fontSize: 12,
    marginBottom: 2,
  },
});
