import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SectionList,
  StyleSheet,
  LayoutAnimation,
  UIManager,
  Platform,
  SafeAreaView,
} from 'react-native';
import {CommonHeader} from './sharedComponents';
import {COLORS, SIZES} from '../constants/themes';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons';
import { commonStyles } from '../constants';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const SupportScreen = () => {
  const data = [
    {
      id: 1,
      supportingTitle: 'Refund Status: Common Question',
      content: 'Eligible course purchases can be refunded within 30 days of purchase.After Udemy receives and processes your refund request, it is instantly sent to your payment processor or financial institution. Depending on your financial institution and location, the funds may take 5 to 10 business days or longer to appear in your account.If you seek a refund within 24 hours of purchasing the course, it may be processed as a purchase reversal (see below for additional details).',
    },
    {
      id: 2,
      supportingTitle: 'Troubleshooting Failed Payments',
      content: 'Some payment options require extra verification. This can include 3D Secure Authentication, password verification, and mobile in-app confirmation.If you receive a notification requesting that you complete the needed authentication procedures, please verify your payment methods verification process to ensure that you have completed all necessary stages. If you are encountering problems, please contact your bank for help.',
    },
    {
      id: 3,
      supportingTitle: 'How To Find Your Missing Course',
      content: 'If you don’t see a confirmation email in the email account you were expecting to see it, and there is no record of the purchase in your banking information, this very likely indicates the purchase was not successful.',
    },
    {
      id: 4,
      supportingTitle: 'Downloading Course Resources',
      content: 'Many instructors add supplemental resources to their lectures, like PDFs, design templates or source code, as a means to enhance the learning experience of the course. These resources can quickly be downloaded to your computer and viewed. ',
    },
    {
      id: 5,
      supportingTitle: 'How To Refund A Course',
      content: 'Refund requests for Udemy courses purchased as gifts can be sent to our Support Team. Please be advised that our return policy extends to gift orders, and some restrictions may apply.Return requests made by the gift receiver may be fulfilled using Udemy Credits, if they meet our 30-day return policy. Refund requests cannot be submitted using the Udemy mobile app. If you need to seek a refund from your mobile device, just log in to our mobile site using a browser and submit your request from the Purchase history page (as seen above). ',
    },
    {
      id: 6,
      supportingTitle: 'Lifetime Access',
      content: 'One of the best features of Udemy is the ability to access your courses from practically anywhere and at any time. We are confident that students will profit from the unlimited educational opportunities that this feature provides.Once you have purchased a course, you will have lifetime access, as long as your account is active and Udemy retains the course license.',
    },
  ];

  const [sections, setSections] = useState(
    data.map(section => ({...section, isExpanded: false})),
  );

  const toggleExpandCollapse = id => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const newSections = sections.map(section => {
      if (section.id === id) {
        return {...section, isExpanded: !section.isExpanded};
      }
      return section;
    });
    setSections(newSections);
  };

  const renderSectionHeader = ({section}) => (
    <View style={styles.sectionOtr}>
      <TouchableOpacity onPress={() => toggleExpandCollapse(section.id)}>
        <View style={styles.sectionInr}>
          <Text style={styles.sectionTitle}>{section.supportingTitle}</Text>
          <FontAwesomeIcon
            icon={section.isExpanded ? faAngleUp : faAngleDown}
            size={32}
          />
        </View>
      </TouchableOpacity>
      {section.isExpanded && (
        <View style={styles.contentContainer}>
          <Text style={styles.contentContainerTitle}>{section.content}</Text>
        </View>
      )}
    </View>
  );
  

  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader
        sectionHeaderTitle="Help & Support" showBackIcon={true} showHeader={true}
      />
      <View style={styles.containerOtr}>
        <SectionList
          sections={sections.map(section => ({
            ...section,
            data: [section.content],
          }))}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={renderSectionHeader}
          renderItem={() => null}
        />
      </View>
    </SafeAreaView>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.$White,
  },
  sectionOtr: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: SIZES.padding_20,
    marginBottom: 20,
    backgroundColor: COLORS.$pink_shade_1,
    borderRadius: 20,
  },
  sectionInr: {
    ...commonStyles.flexContainer,
  },
  sectionTitle: {
    fontSize: SIZES.sz_20_font,
    fontWeight: 'bold',
    color:COLORS.$black,
  },
  contentContainer: {
    marginTop: 10,
    backgroundColor: 'white',
    padding: 20,
    textAlign: 'justify'
  },
  contentContainerTitle: {
    fontSize: SIZES.sz_18_font,
    // color: COLORS.$grey_shade_2,
  },
  containerOtr: {
    marginHorizontal: 20,
    marginVertical: 20
  }
});