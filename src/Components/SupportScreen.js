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
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    },
    {
      id: 2,
      supportingTitle: 'Troubleshooting Failed Payments',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    },
    {
      id: 3,
      supportingTitle: 'How To Find Your Missing Course',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    },
    {
      id: 4,
      supportingTitle: 'Downloading Course Resources',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    },
    {
      id: 5,
      supportingTitle: 'How To Refund A Course',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    },
    {
      id: 6,
      supportingTitle: 'Lifetime Access',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
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
    <TouchableOpacity onPress={() => toggleExpandCollapse(section.id)}>
      <View style={styles.sectionOtr}>
        <View style={styles.sectionInr}>
          <Text style={styles.sectionTitle}>{section.supportingTitle}</Text>
          <FontAwesomeIcon
          icon={section.isExpanded ? faAngleUp : faAngleDown}
          size={32}
        />
        </View>
        {section.isExpanded && (
          <View style={styles.contentContainer}>
            <Text style={styles.contentContainerTitle}>{section.content}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader
        sectionHeaderTitle="Help & Support" showBackIcon={true} showHeader={true}
      />
      <SectionList
        sections={sections.map(section => ({
          ...section,
          data: [section.content],
        }))}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={renderSectionHeader}
        renderItem={() => null}
      />
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
    // marginVertical: 10,
    // marginHorizontal: 16,
    backgroundColor: COLORS.$pink_shade_1,
    borderRadius: 10,
  },
  sectionInr: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: SIZES.sz_20_font,
    fontWeight: 'bold',
    color:COLORS.$black,
  },
  contentContainer: {
    marginTop: 10,
  },
  contentContainerTitle: {
    fontSize: SIZES.sz_19_font,
    color: COLORS.$darkGray,
  },
});