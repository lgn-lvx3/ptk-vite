import React from "react"
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer"
import { store } from "state/Store"

export const PDFSurvey: React.FC = () => {
    const survey = store.app.survey()
    const score = store.app.score()

    if (!survey) {
        return null
    }

    const styles = StyleSheet.create({
        title: { fontSize: 24, textAlign: "left", textTransform: "uppercase" },
        subtitle: {
            fontSize: 14,
            textAlign: "left",
            marginTop: 15,
            textTransform: "uppercase",
            color: "#4B5563",
        },
        body: { marginTop: 35, marginBottom: 60, paddingHorizontal: 35 },
        h3: { fontSize: 18, marginTop: 15, fontWeight: "bold" },
        p: { fontSize: 14, marginVertical: 15 },
        answerRow: {
            display: "flex",
            flexDirection: "row",
            width: "100%",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
            borderBottom: "2px solid #E5E7EB",
            paddingBottom: 10,
            marginVertical: 10,
        },
        question: {
            fontSize: 14,
            fontWeight: "bold",
            flex: 2,
            paddingRight: 20,
        },
        answer: {
            fontSize: 14,
            fontWeight: "bold",
            flex: 1,
            textAlign: "center",
        },
        value: { fontSize: 14, flex: 0.25, textAlign: "center" },
        option: { marginTop: 10 },
    })

    return (
        <Document>
            <Page size="A4">
                <View style={styles.body}>
                    {/* pre survey */}
                    <Text style={styles.title}>{survey.title}</Text>
                    <Text style={styles.subtitle}>{survey.subtitle}</Text>
                    <View>
                        <Text style={styles.h3}>Instructions</Text>
                        <Text style={styles.p}>
                            {survey.instructions.text}{" "}
                            <Text style={styles.option}>
                                {survey.instructions.timePeriod}.
                            </Text>
                        </Text>
                    </View>
                    <View style={styles.answerRow}>
                        <Text style={styles.question}>Question</Text>
                        <Text style={styles.answer}>Answer</Text>
                        <Text style={styles.value}>Value</Text>
                    </View>
                    {/* survey questions */}
                    {survey.selected.map((question) => (
                        <View key={question.id} style={styles.answerRow}>
                            <Text style={styles.question}>{question.text}</Text>
                            <Text style={styles.answer}>
                                {question.selectedOption?.optionTuple[0]}
                            </Text>
                            <Text style={styles.value}>
                                {question.selectedOption?.optionTuple[1]}
                            </Text>
                        </View>
                    ))}
                    {/* totals */}
                    <View>
                        <Text
                            style={[
                                styles.h3,
                                {
                                    borderBottom: "2px solid #E5E7EB",
                                    marginBottom: 10,
                                    lineHeight: 1.5,
                                },
                            ]}
                        >
                            Total Score
                        </Text>
                        <Text style={styles.title}>
                            {score ?? 0} / {survey.maxScore}
                        </Text>
                    </View>
                </View>
            </Page>
            <Page size="A4">
                <View style={styles.body}>
                    {/* post survey */}
                    {survey.postSurvey?.map((section, index) => (
                        <View key={section.title}>
                            <Text style={styles.h3}>{section.title}</Text>
                            {section.values.map((question, index) => (
                                // rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                                <Text key={index} style={styles.p}>
                                    {question}
                                </Text>
                            ))}
                        </View>
                    ))}
                </View>
            </Page>
        </Document>
    )
}
