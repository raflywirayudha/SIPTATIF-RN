import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { Button, Card, Modal, Text } from "@ui-kitten/components";
import { IconButton } from "react-native-paper";

const data = [
  {
    id: 1,
    no: 1,
    judul:
      "Analisis Performa Protokol Jaringan Ad-Hoc menggunakan Simulasi NS-3",
    status: "Ditolak",
  },
  {
    id: 2,
    no: 2,
    judul: "Penerapan Teknologi Augmented Reality dalam Edukasi Virtual",
    status: "Disetujui",
  },
  {
    id: 3,
    no: 3,
    judul:
      "Desain dan Implementasi Sistem Pendeteksi Kebisingan pada Citra Digital",
    status: "Menunggu",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Disetujui":
      return {
        backgroundColor: "rgba(111, 207, 151, 0.2)",
      };
    case "Ditolak":
      return {
        backgroundColor: "rgba(174, 39, 39, 0.2)",
      };
    case "Menunggu":
      return {
        backgroundColor: "rgba(225, 181, 46, 0.2)",
      };
    default:
      return { backgroundColor: "", fontColor: "#FFFFFF" };
  }
};

export default function Status() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const renderItem = ({ item }) => {
    const statusColor = getStatusColor(item.status);
    let icon = "clock-time-eight-outline";

    switch (item.status) {
      case "Disetujui":
        icon = "check";
        break;
      case "Ditolak":
        icon = "window-close";
        break;
      default:
        icon = "clock-time-eight-outline";
    }

    const showModal = (status, judul) => {
      let modalContent = null;
      let headerColor = "";

      switch (status) {
        case "Ditolak":
          modalContent = [
            { title: "Nama Mahasiswa", content: "John Doe" },
            { title: "Jenis Kelamin", content: "Laki-laki" },
            { title: "Nomor Induk Mahasiswa", content: "123456789" },
            { title: "Angkatan", content: "2020" },
            { title: "Email Mahasiswa", content: "john.doe@example.com" },
            { title: "Judul Tugas Akhir", content: judul },
            { title: "Kategori Tugas Akhir", content: "Kategori A" },
            { title: "Jenis Tugas Akhir", content: "Jenis A" },
            { title: "Dosen Pembimbing 1", content: "Jane Smith" },
            { title: "Dosen Pembimbing 2", content: "Michael Johnson" },
            {
              title: "Berkas",
              content: <Button size="tiny">Download Berkas</Button>,
            },
            {
              title: "Catatan untuk Mahasiswa",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
          ];
          headerColor = "rgba(174, 39, 39, 1)";
          break;
        case "Disetujui":
          modalContent = [
            { title: "Nama Mahasiswa", content: "John Doe" },
            { title: "Jenis Kelamin", content: "Laki-laki" },
            { title: "Nomor Induk Mahasiswa", content: "123456789" },
            { title: "Angkatan", content: "2020" },
            { title: "Email Mahasiswa", content: "john.doe@example.com" },
            { title: "Judul Tugas Akhir", content: judul },
            { title: "Kategori Tugas Akhir", content: "Kategori A" },
            { title: "Jenis Tugas Akhir", content: "Jenis A" },
            { title: "Dosen Pembimbing 1", content: "Jane Smith" },
            { title: "Dosen Pembimbing 2", content: "Michael Johnson" },
            { title: "Dosen Penguji 1", content: "Jane Smith" },
            { title: "Dosen Penguji 2", content: "Michael Johnson" },
          ];
          headerColor = "rgba(111, 207, 151, 1)";
          break;
        case "Menunggu":
          modalContent = [
            { title: "Nama Mahasiswa", content: "John Doe" },
            { title: "Jenis Kelamin", content: "Laki-laki" },
            { title: "Nomor Induk Mahasiswa", content: "123456789" },
            { title: "Angkatan", content: "2020" },
            { title: "Email Mahasiswa", content: "john.doe@example.com" },
            { title: "Judul Tugas Akhir", content: judul },
            { title: "Kategori Tugas Akhir", content: "Kategori A" },
            { title: "Jenis Tugas Akhir", content: "Jenis A" },
          ];
          headerColor = "rgba(225, 181, 46, 1)";
          break;
        default:
          modalContent = null;
      }

      const renderedContent = modalContent.map((item, index) => (
        <View key={index} style={{ marginVertical: 5 }}>
          <Text style={{ fontWeight: "bold", paddingTop: 10 }}>
            {item.title}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ flex: 1 }}>{item.content}</Text>
          </View>
        </View>
      ));

      const modalHeader = (
        <View
          style={{
            backgroundColor: headerColor,
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
            Berkas {status}
          </Text>
        </View>
      );

      setModalContent([modalHeader, ...renderedContent]);
      setModalVisible(true);
    };

    return (
      <View style={styles.tableRow}>
        <View style={[styles.tableCell, { width: "10%", paddingLeft: 15 }]}>
          <Text>{item.no}</Text>
        </View>
        <View style={[styles.tableCell, { width: "45%", paddingLeft: 18 }]}>
          <Text>{item.judul}</Text>
        </View>
        <View style={[styles.tableCell, { width: "20%" }]}>
          <IconButton
            icon={icon}
            color={statusColor.fontColor}
            size={15}
            style={[
              styles.iconButton,
              { backgroundColor: statusColor.backgroundColor },
            ]}
          />
        </View>
        <View style={[styles.tableCell, { width: "25%" }]}>
          <Button
            style={styles.button}
            status="basic"
            size="tiny"
            onPress={() => showModal(item.status, item.judul)}
          >
            Detail
          </Button>
        </View>
      </View>
    );
  };

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
              Judul
            </Text>
            <Text
              style={[styles.tableCell, { width: "20%", textAlign: "center" }]}
            >
              Status
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
          <ScrollView
            contentContainerStyle={styles.modalContent}
            stickyHeaderIndices={[0]}
          >
            {modalContent}
          </ScrollView>
        </Card>
      </Modal>
    </View>
  );
}

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
  iconButton: {
    marginLeft: 40,
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
