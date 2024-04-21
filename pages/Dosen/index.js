import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { Button, Card, Modal, Text } from "@ui-kitten/components";

const data = [
  {
    id: 1,
    no: 1,
    namaDosen: "Iwan Iskandar, S.T., M.T.",
    nidn: "1991838",
    jk: "Laki-laki",
    kuota: 6,
  },
  {
    id: 2,
    no: 2,
    namaDosen: "Reski Mai Candra, S.T., M.Sc.",
    nidn: "1991838",
    jk: "Laki-laki",
    kuota: 4,
  },
  {
    id: 3,
    no: 3,
    namaDosen: "Pizaini, S.T., M.Kom.",
    nidn: "1991838",
    jk: "Laki-laki",
    kuota: 5,
  },
  {
    id: 4,
    no: 4,
    namaDosen: "Iis Afrianty, S.T., M.Sc.",
    nidn: "1991838",
    jk: "Perempuan",
    kuota: 7,
  },
  {
    id: 5,
    no: 5,
    namaDosen: "Dr. Elin Haerani, S.T., M.Kom.",
    nidn: "1991838",
    jk: "Perempuan",
    kuota: 6,
  },
  {
    id: 6,
    no: 6,
    namaDosen: "Eka Pandu Cynthia, S.T., M.Kom.",
    nidn: "1991838",
    jk: "Perempuan",
    kuota: 5,
  },
];

const Dosen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const showModal = (kuota, namaDosen, nidn, jk) => {
    const content = [
      { title: "Nama Dosen", content: namaDosen },
      { title: "NIDN", content: nidn },
      { title: "Jenis Kelamin", content: jk },
      { title: "Kuota", content: kuota },
    ];

    const renderedContent = content.map((item, index) => (
      <View key={index} style={{ marginVertical: 5 }}>
        <Text style={{ fontWeight: "bold", paddingTop: 10 }}>{item.title}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ flex: 1 }}>{item.content}</Text>
        </View>
      </View>
    ));

    const modalHeader = (
      <View
        style={{
          backgroundColor: "rgba(111, 207, 151, 1)",
          padding: 10,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Detail Dosen
        </Text>
      </View>
    );

    setModalContent([modalHeader, ...renderedContent]);
    setModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <View style={styles.tableRow}>
      <View style={[styles.tableCell, { width: "10%", paddingLeft: 15 }]}>
        <Text>{item.no}</Text>
      </View>
      <View style={[styles.tableCell, { width: "45%" }]}>
        <Text>{item.namaDosen}</Text>
      </View>
      <View style={[styles.tableCell, { width: "20%", paddingLeft: 59 }]}>
        <Text>{item.kuota}</Text>
      </View>
      <View style={[styles.tableCell, { width: "25%" }]}>
        <Button
          style={styles.button}
          size="tiny"
          status="basic"
          onPress={() =>
            showModal(item.kuota, item.namaDosen, item.nidn, item.jk)
          }
        >
          Detail
        </Button>
      </View>
    </View>
  );

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListHeaderComponent={
          <View style={styles.tableRow}>
            <Text
              style={[styles.tableCell, { width: "10%", textAlign: "center" }]}
            >
              No
            </Text>
            <Text
              style={[styles.tableCell, { width: "50%", textAlign: "center" }]}
            >
              Nama Dosen
            </Text>
            <Text
              style={[styles.tableCell, { width: "20%", textAlign: "center" }]}
            >
              Kuota
            </Text>
            <Text
              style={[styles.tableCell, { width: "20%", textAlign: "center" }]}
            >
              Aksi
            </Text>
          </View>
        }
      />
      <Modal
        visible={modalVisible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setModalVisible(false)}
      >
        <Card style={styles.modalCard}>
          <ScrollView contentContainerStyle={styles.modalContent}>
            {modalContent}
          </ScrollView>
        </Card>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 10,
  },
  tableCell: {
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#9D9EA5",
    height: 30,
    borderRadius: 20,
    marginLeft: 25,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    padding: 20,
  },
  modalCard: {
    backgroundColor: "white",
    width: 400,
    maxHeight: 600,
    borderRadius: 8,
  },
});

export default Dosen;
