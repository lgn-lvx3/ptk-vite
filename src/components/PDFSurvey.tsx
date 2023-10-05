import React from "react"
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Image,
} from "@react-pdf/renderer"
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
        h3: { fontSize: 18, marginTop: 25, fontWeight: "bold" },
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

    const Section: React.FC<{
        title: string | undefined
        content: string[] | undefined
    }> = ({ title, content }) => (
        <View style={{ marginBottom: 20 }}>
            <Text style={styles.h3}>{title}</Text>
            {content?.map((content, index) => (
                <Text key={index} style={styles.p}>
                    {content}
                </Text>
            ))}
        </View>
    )

    return (
        <Document>
            <Page size="A4">
                <View style={styles.body}>
                    {/* pre survey */}
                    <Text style={styles.title}>{survey.title}</Text>
                    <Text style={styles.subtitle}>{survey.subtitle}</Text>
                    <Text style={styles.subtitle}>ID: {survey.id}</Text>
                    <Text style={styles.subtitle}>
                        {survey.created.toLocaleString()}
                    </Text>

                    {/* survey questions */}
                    {survey.questionSets.map((questionSet) => (
                        <View key={questionSet.id}>
                            {/* instructions */}
                            <View>
                                <Text style={styles.h3}>Instructions</Text>
                                return (
                                <Text key={questionSet.id} style={styles.p}>
                                    {questionSet.instructions}
                                </Text>
                            </View>
                            <View style={styles.answerRow}>
                                <Text style={styles.question}>Question</Text>
                                <Text style={styles.answer}>Answer</Text>
                                <Text style={styles.value}>Value</Text>
                            </View>
                            {questionSet.questions.map((question) => (
                                <View
                                    key={question.id}
                                    style={styles.answerRow}
                                >
                                    <Text style={styles.question}>
                                        {question.prompt}
                                    </Text>
                                    <Text style={styles.answer}>
                                        {
                                            question.selectedAnswer
                                                ?.optionTuple[0]
                                        }
                                    </Text>
                                    <Text style={styles.value}>
                                        {
                                            question.selectedAnswer
                                                ?.optionTuple[1]
                                        }
                                    </Text>
                                </View>
                            ))}
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
                    {survey.postSurvey.note && (
                        <View>
                            <Text style={styles.h3}>Note</Text>
                            {survey.postSurvey.note?.content.map(
                                (content, index) => (
                                    // rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                                    <Text key={index} style={styles.p}>
                                        {content}
                                    </Text>
                                ),
                            )}
                        </View>
                    )}
                    {/* post survey */}
                    {/* interpretation */}
                    <Section
                        title={survey.postSurvey.interpretation.title}
                        content={survey.postSurvey.interpretation.content}
                    />
                    {/* scoring */}
                    <Section
                        title={survey.postSurvey.scoring.title}
                        content={survey.postSurvey.scoring.content}
                    />
                    {/* mcid */}
                    <Section
                        title={survey.postSurvey.mcid?.title}
                        content={survey.postSurvey.mcid?.content}
                    />
                    {/* references */}
                    <Section
                        title={survey.postSurvey.references.title}
                        content={survey.postSurvey.references.content}
                    />
                </View>
            </Page>
        </Document>
    )
}
