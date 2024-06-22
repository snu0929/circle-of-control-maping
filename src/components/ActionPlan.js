import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const ActionPlan = () => {
  const [goal, setGoal] = useState('');
  const [steps, setSteps] = useState([{ step: '' }]);
  const [deadlines, setDeadlines] = useState([{ date: null }]);
  const [obstacles, setObstacles] = useState('');
  const [strategies, setStrategies] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const addStep = () => {
    setSteps([...steps, { step: '' }]);
  };

  const handleChange = (index, text) => {
    const newSteps = [...steps];
    newSteps[index].step = text;
    setSteps(newSteps);
  };

  const showDatePicker = (index) => {
    setCurrentStepIndex(index);
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const newSteps = [...deadlines];
    newSteps[currentStepIndex].date = date;
    setDeadlines(newSteps);
    hideDatePicker();
  };

  const handleSubmit = () => {

    console.log('Submitted Action Plan:', {
      goal,
      steps,
      deadlines,
      obstacles,
      strategies,
    });

    setSubmitted(true);


    setGoal('');
    setSteps([{ step: '' }]);
    setDeadlines([{ date: null }]);
    setObstacles('');
    setStrategies('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.section}>
          <Text style={styles.title}>Action Plan Creator</Text>
          <Text style={styles.subtitle}>Step-by-step action plan creation interface.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Goal Identification</Text>
          <TextInput
            style={styles.input}
            placeholder="I want to ..."
            value={goal}
            onChangeText={setGoal}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Breaking Down the Goal</Text>
          {steps.map((item, index) => (
            <View key={index} style={styles.stepContainer}>
              <TextInput
                style={styles.input}
                placeholder={`Please write your step ${index + 1} here`}
                value={item.step}
                onChangeText={(text) => handleChange(index, text)}
              />
            </View>
          ))}
          <Button title="Add Step" onPress={addStep} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Setting up Deadlines</Text>
          {deadlines.map((item, index) => (
            <View key={index} style={styles.stepContainer}>
              <Button title={item.date ? item.date.toDateString() : "Pick a Date"} onPress={() => showDatePicker(index)} />
            </View>
          ))}
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Identifying Obstacles and Strategies</Text>
          <Text style={styles.label}>What obstacles you may face in achieving your goals?</Text>
          <TextInput
            style={styles.input}
            multiline
            numberOfLines={4}
            value={obstacles}
            onChangeText={setObstacles}
            placeholder="Enter obstacles..."
          />
          <Text style={styles.label}>How will you overcome these obstacles?</Text>
          <TextInput
            style={styles.input}
            multiline
            numberOfLines={4}
            value={strategies}
            onChangeText={setStrategies}
            placeholder="Enter strategies..."
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Review & Submit" onPress={handleSubmit} />
        </View>

        {submitted && (
          <View style={styles.submittedContainer}>
            <Text style={styles.submittedTitle}>Submitted Action Plan</Text>
            <View style={styles.submittedSection}>
              <Text style={styles.submittedLabel}>Goal:</Text>
              <Text>{goal}</Text>
            </View>
            <View style={styles.submittedSection}>
              <Text style={styles.submittedLabel}>Steps:</Text>
              {steps.map((step, index) => (
                <Text key={index}>{`${index + 1}. ${step.step}`}</Text>
              ))}
            </View>
            <View style={styles.submittedSection}>
              <Text style={styles.submittedLabel}>Deadlines:</Text>
              {deadlines.map((deadline, index) => (
                <Text key={index}>{`${index + 1}. ${deadline.date ? deadline.date.toDateString() : ''}`}</Text>
              ))}
            </View>
            <View style={styles.submittedSection}>
              <Text style={styles.submittedLabel}>Obstacles:</Text>
              <Text>{obstacles}</Text>
            </View>
            <View style={styles.submittedSection}>
              <Text style={styles.submittedLabel}>Strategies:</Text>
              <Text>{strategies}</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  stepContainer: {
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  submittedContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  submittedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  submittedSection: {
    marginBottom: 10,
  },
  submittedLabel: {
    fontWeight: 'bold',
  },
});

export default ActionPlan;
