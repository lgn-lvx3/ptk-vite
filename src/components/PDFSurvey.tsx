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
import logo from "/src/assets/calculator-logo-pdf.png"
import { ISurvey } from "state/ISurvey/ISurvey"

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        textAlign: "left",
        textTransform: "uppercase",
        display: "flex",
        flex: 1,
    },
    subtitle: {
        fontSize: 14,
        textAlign: "left",
        marginTop: 15,
        textTransform: "uppercase",
        color: "#4B5563",
    },
    h3: { fontSize: 18, marginTop: 25, fontWeight: "bold" },
    p: { fontSize: 14, marginVertical: 15 },
    answerRow: {
        display: "flex",
        flexDirection: "row",
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

const Header: React.FC<{
    survey: ISurvey
}> = ({ survey }) => (
    <View
        style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: 20,
        }}
    >
        <View
            style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                gap: 10,
            }}
        >
            <Text
                style={{
                    textTransform: "uppercase",
                    fontSize: 24,
                    fontWeight: "bold",
                }}
            >
                {survey.title}
            </Text>
            <Text
                style={{
                    fontSize: 12,
                    textTransform: "uppercase",
                    color: "#4B5563",
                    fontWeight: "demibold",
                }}
            >
                {survey.subtitle}
            </Text>
            <Text style={{ fontSize: 14, textTransform: "uppercase" }}>
                ID: {survey.id}
            </Text>
            <Text style={{ fontSize: 14, textTransform: "uppercase" }}>
                {survey.created.toLocaleString()}
            </Text>
        </View>
        <View
            style={{
                display: "flex",
                alignSelf: "flex-end",
                flex: 1,
                maxHeight: 100,
                maxWidth: 100,
                borderRadius: 15,
                overflow: "hidden",
            }}
        >
            <Image
                src={logo}
                style={{
                    height: "auto",
                    objectFit: "scale-down",
                }}
            />
        </View>
    </View>
)

const Section: React.FC<{
    title: string | undefined
    content: string[] | undefined
}> = ({ title, content }) => (
    <View style={{ marginBottom: 20 }}>
        <Text
            style={{
                fontSize: 18,
                marginTop: 25,
                fontWeight: "bold",
            }}
        >
            {title}
        </Text>
        {content?.map((content, index) => (
            <Text key={index} style={styles.p}>
                {content}
            </Text>
        ))}
    </View>
)

export const PDFSurvey: React.FC = () => {
    const survey = store.app.survey()

    if (!survey) {
        return null
    }

    return (
        <Document>
            <Page size="A4">
                <View
                    style={{
                        marginTop: 35,
                        paddingHorizontal: 35,
                        display: "flex",
                        flex: 1,
                        flexDirection: "column",
                    }}
                >
                    <Header survey={survey} />

                    {/* survey questions */}
                    {survey.questionSets.map((questionSet) => (
                        <View key={questionSet.id}>
                            {/* instructions */}
                            <View>
                                <Text style={styles.h3}>Instructions</Text>
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
                                        {question.prompt.text}
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
                        {survey.scales.map((scale) => (
                            <View key={scale.id} style={styles.answerRow}>
                                <Text style={styles.question}>
                                    {scale.name}
                                </Text>
                                <Text style={styles.answer}>Score</Text>
                                <Text style={styles.value}>
                                    {scale.percentageScore} / 100
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>
            </Page>
            <Page size="A4">
                <View
                    style={{
                        marginTop: 35,
                        marginBottom: 60,
                        paddingHorizontal: 35,
                        display: "flex",
                        flex: 1,
                        flexDirection: "column",
                    }}
                >
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
